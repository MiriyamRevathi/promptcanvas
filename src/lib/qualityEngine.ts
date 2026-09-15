import { PromptSections, QualityScoreData } from '../types/prompt';

/**
 * Deterministically computes Structure Completeness Score (0-100)
 * Evaluates depth, clarity, specificity, and structural readiness.
 */
export function calculateQualityScore(
  rawIdea: string,
  sections: PromptSections
): QualityScoreData {
  const ideaLen = rawIdea.trim().length;

  // 1. Goal score (0-100)
  const goalContent = sections.goal.content;
  const goalWords = goalContent.trim().split(/\s+/).length;
  let goalScore = Math.min(100, Math.round(50 + Math.min(30, goalWords * 0.8) + (ideaLen > 25 ? 20 : 10)));
  if (goalContent.toLowerCase().includes('objective') || goalContent.toLowerCase().includes('focus')) {
    goalScore = Math.min(100, goalScore + 5);
  }

  // 2. Audience score (0-100)
  const audienceContent = sections.audience.content;
  const hasMultiplePersonas = (audienceContent.match(/[•\-\d\.]/g) || []).length >= 3;
  let audienceScore = Math.min(
    100,
    Math.round(60 + (hasMultiplePersonas ? 25 : 10) + Math.min(15, audienceContent.length / 25))
  );

  // 3. Features score (0-100)
  const featuresContent = sections.features.content;
  const featureBullets = (featuresContent.match(/[•\-\[F\d\]]/g) || []).length;
  let featuresScore = Math.min(
    100,
    Math.round(55 + Math.min(30, featureBullets * 5) + Math.min(15, featuresContent.length / 30))
  );

  // 4. Design score (0-100)
  const designContent = sections.design.content;
  const mentionsVisual =
    /palette|color|typography|layout|grid|contrast|spacing|whitespace/i.test(designContent);
  let designScore = Math.min(
    100,
    Math.round(60 + (mentionsVisual ? 25 : 10) + Math.min(15, designContent.length / 25))
  );

  // 5. Technical score (0-100)
  const techContent = sections.technical.content;
  const mentionsTech =
    /responsive|html|typescript|react|api|performance|storage|state|framework/i.test(techContent);
  let techScore = Math.min(
    100,
    Math.round(58 + (mentionsTech ? 26 : 10) + Math.min(16, techContent.length / 30))
  );

  // 6. Constraints score (0-100)
  const constraintsContent = sections.constraints.content;
  const mentionsBounds =
    /constraint|compliance|wcag|zero|must|privacy|security|offline/i.test(constraintsContent);
  let constraintsScore = Math.min(
    100,
    Math.round(54 + (mentionsBounds ? 28 : 10) + Math.min(18, constraintsContent.length / 25))
  );

  // Clamp individual scores
  goalScore = Math.max(40, Math.min(100, goalScore));
  audienceScore = Math.max(40, Math.min(100, audienceScore));
  featuresScore = Math.max(40, Math.min(100, featuresScore));
  designScore = Math.max(40, Math.min(100, designScore));
  techScore = Math.max(40, Math.min(100, techScore));
  constraintsScore = Math.max(40, Math.min(100, constraintsScore));

  // Overall weighted score
  // Goal: 20%, Features: 20%, Audience: 15%, Design: 15%, Technical: 15%, Constraints: 15%
  const overall = Math.round(
    goalScore * 0.2 +
      featuresScore * 0.2 +
      audienceScore * 0.15 +
      designScore * 0.15 +
      techScore * 0.15 +
      constraintsScore * 0.15
  );

  const totalWords = Object.values(sections).reduce(
    (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
    0
  );

  return {
    overall,
    goal: goalScore,
    audience: audienceScore,
    features: featuresScore,
    design: designScore,
    technical: techScore,
    constraints: constraintsScore,
    details: {
      wordCount: totalWords,
      clarityFactor: Math.min(100, Math.round(overall * 1.05)),
    },
  };
}
