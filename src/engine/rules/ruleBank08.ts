import { SectionKey } from '../../types/prompt';

export interface QualityRule08 {
  id: string;
  ruleName: string;
  targetSection: SectionKey;
  weight: number;
  description: string;
  validationKeywords: string[];
  remediationGuidance: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export const QUALITY_RULES_08: QualityRule08[] = [
  {
    id: "rule-08-0001",
    ruleName: "Quality Criterion 08-0001 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0002",
    ruleName: "Quality Criterion 08-0002 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0003",
    ruleName: "Quality Criterion 08-0003 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0004",
    ruleName: "Quality Criterion 08-0004 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0005",
    ruleName: "Quality Criterion 08-0005 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0006",
    ruleName: "Quality Criterion 08-0006 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0007",
    ruleName: "Quality Criterion 08-0007 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0008",
    ruleName: "Quality Criterion 08-0008 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0009",
    ruleName: "Quality Criterion 08-0009 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0010",
    ruleName: "Quality Criterion 08-0010 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0011",
    ruleName: "Quality Criterion 08-0011 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0012",
    ruleName: "Quality Criterion 08-0012 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0013",
    ruleName: "Quality Criterion 08-0013 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0014",
    ruleName: "Quality Criterion 08-0014 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0015",
    ruleName: "Quality Criterion 08-0015 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0016",
    ruleName: "Quality Criterion 08-0016 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0017",
    ruleName: "Quality Criterion 08-0017 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0018",
    ruleName: "Quality Criterion 08-0018 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0019",
    ruleName: "Quality Criterion 08-0019 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0020",
    ruleName: "Quality Criterion 08-0020 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0021",
    ruleName: "Quality Criterion 08-0021 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0022",
    ruleName: "Quality Criterion 08-0022 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0023",
    ruleName: "Quality Criterion 08-0023 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0024",
    ruleName: "Quality Criterion 08-0024 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0025",
    ruleName: "Quality Criterion 08-0025 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0026",
    ruleName: "Quality Criterion 08-0026 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0027",
    ruleName: "Quality Criterion 08-0027 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0028",
    ruleName: "Quality Criterion 08-0028 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0029",
    ruleName: "Quality Criterion 08-0029 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0030",
    ruleName: "Quality Criterion 08-0030 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0031",
    ruleName: "Quality Criterion 08-0031 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0032",
    ruleName: "Quality Criterion 08-0032 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0033",
    ruleName: "Quality Criterion 08-0033 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0034",
    ruleName: "Quality Criterion 08-0034 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0035",
    ruleName: "Quality Criterion 08-0035 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0036",
    ruleName: "Quality Criterion 08-0036 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0037",
    ruleName: "Quality Criterion 08-0037 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0038",
    ruleName: "Quality Criterion 08-0038 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0039",
    ruleName: "Quality Criterion 08-0039 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0040",
    ruleName: "Quality Criterion 08-0040 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0041",
    ruleName: "Quality Criterion 08-0041 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0042",
    ruleName: "Quality Criterion 08-0042 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0043",
    ruleName: "Quality Criterion 08-0043 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0044",
    ruleName: "Quality Criterion 08-0044 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0045",
    ruleName: "Quality Criterion 08-0045 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0046",
    ruleName: "Quality Criterion 08-0046 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0047",
    ruleName: "Quality Criterion 08-0047 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0048",
    ruleName: "Quality Criterion 08-0048 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0049",
    ruleName: "Quality Criterion 08-0049 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0050",
    ruleName: "Quality Criterion 08-0050 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0051",
    ruleName: "Quality Criterion 08-0051 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0052",
    ruleName: "Quality Criterion 08-0052 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0053",
    ruleName: "Quality Criterion 08-0053 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0054",
    ruleName: "Quality Criterion 08-0054 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0055",
    ruleName: "Quality Criterion 08-0055 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0056",
    ruleName: "Quality Criterion 08-0056 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0057",
    ruleName: "Quality Criterion 08-0057 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0058",
    ruleName: "Quality Criterion 08-0058 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0059",
    ruleName: "Quality Criterion 08-0059 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0060",
    ruleName: "Quality Criterion 08-0060 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0061",
    ruleName: "Quality Criterion 08-0061 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0062",
    ruleName: "Quality Criterion 08-0062 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0063",
    ruleName: "Quality Criterion 08-0063 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0064",
    ruleName: "Quality Criterion 08-0064 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0065",
    ruleName: "Quality Criterion 08-0065 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0066",
    ruleName: "Quality Criterion 08-0066 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0067",
    ruleName: "Quality Criterion 08-0067 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0068",
    ruleName: "Quality Criterion 08-0068 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0069",
    ruleName: "Quality Criterion 08-0069 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0070",
    ruleName: "Quality Criterion 08-0070 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0071",
    ruleName: "Quality Criterion 08-0071 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0072",
    ruleName: "Quality Criterion 08-0072 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0073",
    ruleName: "Quality Criterion 08-0073 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0074",
    ruleName: "Quality Criterion 08-0074 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0075",
    ruleName: "Quality Criterion 08-0075 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0076",
    ruleName: "Quality Criterion 08-0076 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0077",
    ruleName: "Quality Criterion 08-0077 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0078",
    ruleName: "Quality Criterion 08-0078 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0079",
    ruleName: "Quality Criterion 08-0079 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0080",
    ruleName: "Quality Criterion 08-0080 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0081",
    ruleName: "Quality Criterion 08-0081 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0082",
    ruleName: "Quality Criterion 08-0082 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0083",
    ruleName: "Quality Criterion 08-0083 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0084",
    ruleName: "Quality Criterion 08-0084 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0085",
    ruleName: "Quality Criterion 08-0085 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0086",
    ruleName: "Quality Criterion 08-0086 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0087",
    ruleName: "Quality Criterion 08-0087 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0088",
    ruleName: "Quality Criterion 08-0088 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0089",
    ruleName: "Quality Criterion 08-0089 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0090",
    ruleName: "Quality Criterion 08-0090 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0091",
    ruleName: "Quality Criterion 08-0091 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0092",
    ruleName: "Quality Criterion 08-0092 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0093",
    ruleName: "Quality Criterion 08-0093 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0094",
    ruleName: "Quality Criterion 08-0094 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0095",
    ruleName: "Quality Criterion 08-0095 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0096",
    ruleName: "Quality Criterion 08-0096 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0097",
    ruleName: "Quality Criterion 08-0097 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0098",
    ruleName: "Quality Criterion 08-0098 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0099",
    ruleName: "Quality Criterion 08-0099 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0100",
    ruleName: "Quality Criterion 08-0100 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0101",
    ruleName: "Quality Criterion 08-0101 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0102",
    ruleName: "Quality Criterion 08-0102 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0103",
    ruleName: "Quality Criterion 08-0103 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0104",
    ruleName: "Quality Criterion 08-0104 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0105",
    ruleName: "Quality Criterion 08-0105 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0106",
    ruleName: "Quality Criterion 08-0106 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0107",
    ruleName: "Quality Criterion 08-0107 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0108",
    ruleName: "Quality Criterion 08-0108 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0109",
    ruleName: "Quality Criterion 08-0109 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0110",
    ruleName: "Quality Criterion 08-0110 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0111",
    ruleName: "Quality Criterion 08-0111 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0112",
    ruleName: "Quality Criterion 08-0112 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0113",
    ruleName: "Quality Criterion 08-0113 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0114",
    ruleName: "Quality Criterion 08-0114 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0115",
    ruleName: "Quality Criterion 08-0115 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0116",
    ruleName: "Quality Criterion 08-0116 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0117",
    ruleName: "Quality Criterion 08-0117 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0118",
    ruleName: "Quality Criterion 08-0118 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0119",
    ruleName: "Quality Criterion 08-0119 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0120",
    ruleName: "Quality Criterion 08-0120 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0121",
    ruleName: "Quality Criterion 08-0121 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0122",
    ruleName: "Quality Criterion 08-0122 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0123",
    ruleName: "Quality Criterion 08-0123 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0124",
    ruleName: "Quality Criterion 08-0124 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0125",
    ruleName: "Quality Criterion 08-0125 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0126",
    ruleName: "Quality Criterion 08-0126 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0127",
    ruleName: "Quality Criterion 08-0127 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0128",
    ruleName: "Quality Criterion 08-0128 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0129",
    ruleName: "Quality Criterion 08-0129 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0130",
    ruleName: "Quality Criterion 08-0130 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0131",
    ruleName: "Quality Criterion 08-0131 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0132",
    ruleName: "Quality Criterion 08-0132 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0133",
    ruleName: "Quality Criterion 08-0133 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0134",
    ruleName: "Quality Criterion 08-0134 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0135",
    ruleName: "Quality Criterion 08-0135 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0136",
    ruleName: "Quality Criterion 08-0136 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0137",
    ruleName: "Quality Criterion 08-0137 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0138",
    ruleName: "Quality Criterion 08-0138 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0139",
    ruleName: "Quality Criterion 08-0139 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0140",
    ruleName: "Quality Criterion 08-0140 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0141",
    ruleName: "Quality Criterion 08-0141 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0142",
    ruleName: "Quality Criterion 08-0142 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0143",
    ruleName: "Quality Criterion 08-0143 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0144",
    ruleName: "Quality Criterion 08-0144 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0145",
    ruleName: "Quality Criterion 08-0145 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0146",
    ruleName: "Quality Criterion 08-0146 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0147",
    ruleName: "Quality Criterion 08-0147 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0148",
    ruleName: "Quality Criterion 08-0148 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0149",
    ruleName: "Quality Criterion 08-0149 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0150",
    ruleName: "Quality Criterion 08-0150 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0151",
    ruleName: "Quality Criterion 08-0151 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0152",
    ruleName: "Quality Criterion 08-0152 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0153",
    ruleName: "Quality Criterion 08-0153 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0154",
    ruleName: "Quality Criterion 08-0154 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0155",
    ruleName: "Quality Criterion 08-0155 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0156",
    ruleName: "Quality Criterion 08-0156 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0157",
    ruleName: "Quality Criterion 08-0157 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0158",
    ruleName: "Quality Criterion 08-0158 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0159",
    ruleName: "Quality Criterion 08-0159 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0160",
    ruleName: "Quality Criterion 08-0160 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0161",
    ruleName: "Quality Criterion 08-0161 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0162",
    ruleName: "Quality Criterion 08-0162 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0163",
    ruleName: "Quality Criterion 08-0163 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0164",
    ruleName: "Quality Criterion 08-0164 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0165",
    ruleName: "Quality Criterion 08-0165 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0166",
    ruleName: "Quality Criterion 08-0166 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0167",
    ruleName: "Quality Criterion 08-0167 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0168",
    ruleName: "Quality Criterion 08-0168 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0169",
    ruleName: "Quality Criterion 08-0169 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0170",
    ruleName: "Quality Criterion 08-0170 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0171",
    ruleName: "Quality Criterion 08-0171 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0172",
    ruleName: "Quality Criterion 08-0172 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0173",
    ruleName: "Quality Criterion 08-0173 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0174",
    ruleName: "Quality Criterion 08-0174 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0175",
    ruleName: "Quality Criterion 08-0175 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0176",
    ruleName: "Quality Criterion 08-0176 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0177",
    ruleName: "Quality Criterion 08-0177 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0178",
    ruleName: "Quality Criterion 08-0178 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0179",
    ruleName: "Quality Criterion 08-0179 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0180",
    ruleName: "Quality Criterion 08-0180 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0181",
    ruleName: "Quality Criterion 08-0181 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0182",
    ruleName: "Quality Criterion 08-0182 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0183",
    ruleName: "Quality Criterion 08-0183 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0184",
    ruleName: "Quality Criterion 08-0184 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0185",
    ruleName: "Quality Criterion 08-0185 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0186",
    ruleName: "Quality Criterion 08-0186 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0187",
    ruleName: "Quality Criterion 08-0187 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0188",
    ruleName: "Quality Criterion 08-0188 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0189",
    ruleName: "Quality Criterion 08-0189 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0190",
    ruleName: "Quality Criterion 08-0190 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0191",
    ruleName: "Quality Criterion 08-0191 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0192",
    ruleName: "Quality Criterion 08-0192 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0193",
    ruleName: "Quality Criterion 08-0193 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0194",
    ruleName: "Quality Criterion 08-0194 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0195",
    ruleName: "Quality Criterion 08-0195 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0196",
    ruleName: "Quality Criterion 08-0196 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0197",
    ruleName: "Quality Criterion 08-0197 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0198",
    ruleName: "Quality Criterion 08-0198 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0199",
    ruleName: "Quality Criterion 08-0199 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0200",
    ruleName: "Quality Criterion 08-0200 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0201",
    ruleName: "Quality Criterion 08-0201 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0202",
    ruleName: "Quality Criterion 08-0202 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0203",
    ruleName: "Quality Criterion 08-0203 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0204",
    ruleName: "Quality Criterion 08-0204 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0205",
    ruleName: "Quality Criterion 08-0205 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0206",
    ruleName: "Quality Criterion 08-0206 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0207",
    ruleName: "Quality Criterion 08-0207 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0208",
    ruleName: "Quality Criterion 08-0208 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0209",
    ruleName: "Quality Criterion 08-0209 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0210",
    ruleName: "Quality Criterion 08-0210 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0211",
    ruleName: "Quality Criterion 08-0211 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0212",
    ruleName: "Quality Criterion 08-0212 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0213",
    ruleName: "Quality Criterion 08-0213 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0214",
    ruleName: "Quality Criterion 08-0214 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0215",
    ruleName: "Quality Criterion 08-0215 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0216",
    ruleName: "Quality Criterion 08-0216 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0217",
    ruleName: "Quality Criterion 08-0217 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0218",
    ruleName: "Quality Criterion 08-0218 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0219",
    ruleName: "Quality Criterion 08-0219 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0220",
    ruleName: "Quality Criterion 08-0220 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0221",
    ruleName: "Quality Criterion 08-0221 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0222",
    ruleName: "Quality Criterion 08-0222 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0223",
    ruleName: "Quality Criterion 08-0223 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0224",
    ruleName: "Quality Criterion 08-0224 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0225",
    ruleName: "Quality Criterion 08-0225 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0226",
    ruleName: "Quality Criterion 08-0226 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0227",
    ruleName: "Quality Criterion 08-0227 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0228",
    ruleName: "Quality Criterion 08-0228 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0229",
    ruleName: "Quality Criterion 08-0229 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0230",
    ruleName: "Quality Criterion 08-0230 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0231",
    ruleName: "Quality Criterion 08-0231 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0232",
    ruleName: "Quality Criterion 08-0232 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0233",
    ruleName: "Quality Criterion 08-0233 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0234",
    ruleName: "Quality Criterion 08-0234 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0235",
    ruleName: "Quality Criterion 08-0235 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0236",
    ruleName: "Quality Criterion 08-0236 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0237",
    ruleName: "Quality Criterion 08-0237 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0238",
    ruleName: "Quality Criterion 08-0238 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0239",
    ruleName: "Quality Criterion 08-0239 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0240",
    ruleName: "Quality Criterion 08-0240 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0241",
    ruleName: "Quality Criterion 08-0241 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0242",
    ruleName: "Quality Criterion 08-0242 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0243",
    ruleName: "Quality Criterion 08-0243 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0244",
    ruleName: "Quality Criterion 08-0244 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0245",
    ruleName: "Quality Criterion 08-0245 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0246",
    ruleName: "Quality Criterion 08-0246 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0247",
    ruleName: "Quality Criterion 08-0247 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0248",
    ruleName: "Quality Criterion 08-0248 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0249",
    ruleName: "Quality Criterion 08-0249 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0250",
    ruleName: "Quality Criterion 08-0250 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0251",
    ruleName: "Quality Criterion 08-0251 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0252",
    ruleName: "Quality Criterion 08-0252 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0253",
    ruleName: "Quality Criterion 08-0253 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0254",
    ruleName: "Quality Criterion 08-0254 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0255",
    ruleName: "Quality Criterion 08-0255 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0256",
    ruleName: "Quality Criterion 08-0256 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0257",
    ruleName: "Quality Criterion 08-0257 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0258",
    ruleName: "Quality Criterion 08-0258 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0259",
    ruleName: "Quality Criterion 08-0259 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0260",
    ruleName: "Quality Criterion 08-0260 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0261",
    ruleName: "Quality Criterion 08-0261 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0262",
    ruleName: "Quality Criterion 08-0262 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0263",
    ruleName: "Quality Criterion 08-0263 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0264",
    ruleName: "Quality Criterion 08-0264 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0265",
    ruleName: "Quality Criterion 08-0265 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0266",
    ruleName: "Quality Criterion 08-0266 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0267",
    ruleName: "Quality Criterion 08-0267 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0268",
    ruleName: "Quality Criterion 08-0268 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0269",
    ruleName: "Quality Criterion 08-0269 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0270",
    ruleName: "Quality Criterion 08-0270 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0271",
    ruleName: "Quality Criterion 08-0271 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0272",
    ruleName: "Quality Criterion 08-0272 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0273",
    ruleName: "Quality Criterion 08-0273 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0274",
    ruleName: "Quality Criterion 08-0274 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0275",
    ruleName: "Quality Criterion 08-0275 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0276",
    ruleName: "Quality Criterion 08-0276 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0277",
    ruleName: "Quality Criterion 08-0277 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0278",
    ruleName: "Quality Criterion 08-0278 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0279",
    ruleName: "Quality Criterion 08-0279 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0280",
    ruleName: "Quality Criterion 08-0280 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0281",
    ruleName: "Quality Criterion 08-0281 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0282",
    ruleName: "Quality Criterion 08-0282 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0283",
    ruleName: "Quality Criterion 08-0283 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0284",
    ruleName: "Quality Criterion 08-0284 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0285",
    ruleName: "Quality Criterion 08-0285 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0286",
    ruleName: "Quality Criterion 08-0286 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0287",
    ruleName: "Quality Criterion 08-0287 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0288",
    ruleName: "Quality Criterion 08-0288 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0289",
    ruleName: "Quality Criterion 08-0289 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0290",
    ruleName: "Quality Criterion 08-0290 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0291",
    ruleName: "Quality Criterion 08-0291 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0292",
    ruleName: "Quality Criterion 08-0292 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0293",
    ruleName: "Quality Criterion 08-0293 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0294",
    ruleName: "Quality Criterion 08-0294 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0295",
    ruleName: "Quality Criterion 08-0295 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0296",
    ruleName: "Quality Criterion 08-0296 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0297",
    ruleName: "Quality Criterion 08-0297 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0298",
    ruleName: "Quality Criterion 08-0298 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0299",
    ruleName: "Quality Criterion 08-0299 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0300",
    ruleName: "Quality Criterion 08-0300 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0301",
    ruleName: "Quality Criterion 08-0301 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0302",
    ruleName: "Quality Criterion 08-0302 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0303",
    ruleName: "Quality Criterion 08-0303 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0304",
    ruleName: "Quality Criterion 08-0304 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0305",
    ruleName: "Quality Criterion 08-0305 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0306",
    ruleName: "Quality Criterion 08-0306 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0307",
    ruleName: "Quality Criterion 08-0307 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0308",
    ruleName: "Quality Criterion 08-0308 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0309",
    ruleName: "Quality Criterion 08-0309 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0310",
    ruleName: "Quality Criterion 08-0310 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0311",
    ruleName: "Quality Criterion 08-0311 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0312",
    ruleName: "Quality Criterion 08-0312 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0313",
    ruleName: "Quality Criterion 08-0313 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0314",
    ruleName: "Quality Criterion 08-0314 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0315",
    ruleName: "Quality Criterion 08-0315 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0316",
    ruleName: "Quality Criterion 08-0316 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0317",
    ruleName: "Quality Criterion 08-0317 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0318",
    ruleName: "Quality Criterion 08-0318 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0319",
    ruleName: "Quality Criterion 08-0319 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0320",
    ruleName: "Quality Criterion 08-0320 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0321",
    ruleName: "Quality Criterion 08-0321 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0322",
    ruleName: "Quality Criterion 08-0322 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0323",
    ruleName: "Quality Criterion 08-0323 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0324",
    ruleName: "Quality Criterion 08-0324 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0325",
    ruleName: "Quality Criterion 08-0325 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0326",
    ruleName: "Quality Criterion 08-0326 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0327",
    ruleName: "Quality Criterion 08-0327 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0328",
    ruleName: "Quality Criterion 08-0328 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0329",
    ruleName: "Quality Criterion 08-0329 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0330",
    ruleName: "Quality Criterion 08-0330 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0331",
    ruleName: "Quality Criterion 08-0331 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0332",
    ruleName: "Quality Criterion 08-0332 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0333",
    ruleName: "Quality Criterion 08-0333 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0334",
    ruleName: "Quality Criterion 08-0334 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0335",
    ruleName: "Quality Criterion 08-0335 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0336",
    ruleName: "Quality Criterion 08-0336 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0337",
    ruleName: "Quality Criterion 08-0337 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0338",
    ruleName: "Quality Criterion 08-0338 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0339",
    ruleName: "Quality Criterion 08-0339 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0340",
    ruleName: "Quality Criterion 08-0340 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0341",
    ruleName: "Quality Criterion 08-0341 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0342",
    ruleName: "Quality Criterion 08-0342 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0343",
    ruleName: "Quality Criterion 08-0343 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0344",
    ruleName: "Quality Criterion 08-0344 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0345",
    ruleName: "Quality Criterion 08-0345 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0346",
    ruleName: "Quality Criterion 08-0346 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0347",
    ruleName: "Quality Criterion 08-0347 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0348",
    ruleName: "Quality Criterion 08-0348 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0349",
    ruleName: "Quality Criterion 08-0349 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0350",
    ruleName: "Quality Criterion 08-0350 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0351",
    ruleName: "Quality Criterion 08-0351 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0352",
    ruleName: "Quality Criterion 08-0352 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0353",
    ruleName: "Quality Criterion 08-0353 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0354",
    ruleName: "Quality Criterion 08-0354 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0355",
    ruleName: "Quality Criterion 08-0355 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0356",
    ruleName: "Quality Criterion 08-0356 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0357",
    ruleName: "Quality Criterion 08-0357 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0358",
    ruleName: "Quality Criterion 08-0358 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0359",
    ruleName: "Quality Criterion 08-0359 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0360",
    ruleName: "Quality Criterion 08-0360 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0361",
    ruleName: "Quality Criterion 08-0361 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0362",
    ruleName: "Quality Criterion 08-0362 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0363",
    ruleName: "Quality Criterion 08-0363 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0364",
    ruleName: "Quality Criterion 08-0364 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0365",
    ruleName: "Quality Criterion 08-0365 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0366",
    ruleName: "Quality Criterion 08-0366 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0367",
    ruleName: "Quality Criterion 08-0367 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0368",
    ruleName: "Quality Criterion 08-0368 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0369",
    ruleName: "Quality Criterion 08-0369 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0370",
    ruleName: "Quality Criterion 08-0370 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0371",
    ruleName: "Quality Criterion 08-0371 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0372",
    ruleName: "Quality Criterion 08-0372 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0373",
    ruleName: "Quality Criterion 08-0373 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0374",
    ruleName: "Quality Criterion 08-0374 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0375",
    ruleName: "Quality Criterion 08-0375 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0376",
    ruleName: "Quality Criterion 08-0376 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0377",
    ruleName: "Quality Criterion 08-0377 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0378",
    ruleName: "Quality Criterion 08-0378 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0379",
    ruleName: "Quality Criterion 08-0379 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0380",
    ruleName: "Quality Criterion 08-0380 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0381",
    ruleName: "Quality Criterion 08-0381 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0382",
    ruleName: "Quality Criterion 08-0382 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0383",
    ruleName: "Quality Criterion 08-0383 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0384",
    ruleName: "Quality Criterion 08-0384 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0385",
    ruleName: "Quality Criterion 08-0385 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0386",
    ruleName: "Quality Criterion 08-0386 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0387",
    ruleName: "Quality Criterion 08-0387 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0388",
    ruleName: "Quality Criterion 08-0388 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0389",
    ruleName: "Quality Criterion 08-0389 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0390",
    ruleName: "Quality Criterion 08-0390 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0391",
    ruleName: "Quality Criterion 08-0391 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0392",
    ruleName: "Quality Criterion 08-0392 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0393",
    ruleName: "Quality Criterion 08-0393 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0394",
    ruleName: "Quality Criterion 08-0394 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0395",
    ruleName: "Quality Criterion 08-0395 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0396",
    ruleName: "Quality Criterion 08-0396 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0397",
    ruleName: "Quality Criterion 08-0397 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0398",
    ruleName: "Quality Criterion 08-0398 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0399",
    ruleName: "Quality Criterion 08-0399 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0400",
    ruleName: "Quality Criterion 08-0400 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0401",
    ruleName: "Quality Criterion 08-0401 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0402",
    ruleName: "Quality Criterion 08-0402 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0403",
    ruleName: "Quality Criterion 08-0403 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0404",
    ruleName: "Quality Criterion 08-0404 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0405",
    ruleName: "Quality Criterion 08-0405 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0406",
    ruleName: "Quality Criterion 08-0406 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0407",
    ruleName: "Quality Criterion 08-0407 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0408",
    ruleName: "Quality Criterion 08-0408 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0409",
    ruleName: "Quality Criterion 08-0409 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0410",
    ruleName: "Quality Criterion 08-0410 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0411",
    ruleName: "Quality Criterion 08-0411 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0412",
    ruleName: "Quality Criterion 08-0412 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0413",
    ruleName: "Quality Criterion 08-0413 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0414",
    ruleName: "Quality Criterion 08-0414 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0415",
    ruleName: "Quality Criterion 08-0415 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0416",
    ruleName: "Quality Criterion 08-0416 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0417",
    ruleName: "Quality Criterion 08-0417 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0418",
    ruleName: "Quality Criterion 08-0418 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0419",
    ruleName: "Quality Criterion 08-0419 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0420",
    ruleName: "Quality Criterion 08-0420 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0421",
    ruleName: "Quality Criterion 08-0421 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0422",
    ruleName: "Quality Criterion 08-0422 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0423",
    ruleName: "Quality Criterion 08-0423 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0424",
    ruleName: "Quality Criterion 08-0424 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0425",
    ruleName: "Quality Criterion 08-0425 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0426",
    ruleName: "Quality Criterion 08-0426 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0427",
    ruleName: "Quality Criterion 08-0427 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0428",
    ruleName: "Quality Criterion 08-0428 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0429",
    ruleName: "Quality Criterion 08-0429 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0430",
    ruleName: "Quality Criterion 08-0430 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0431",
    ruleName: "Quality Criterion 08-0431 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0432",
    ruleName: "Quality Criterion 08-0432 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0433",
    ruleName: "Quality Criterion 08-0433 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0434",
    ruleName: "Quality Criterion 08-0434 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0435",
    ruleName: "Quality Criterion 08-0435 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0436",
    ruleName: "Quality Criterion 08-0436 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0437",
    ruleName: "Quality Criterion 08-0437 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0438",
    ruleName: "Quality Criterion 08-0438 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0439",
    ruleName: "Quality Criterion 08-0439 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0440",
    ruleName: "Quality Criterion 08-0440 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0441",
    ruleName: "Quality Criterion 08-0441 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0442",
    ruleName: "Quality Criterion 08-0442 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0443",
    ruleName: "Quality Criterion 08-0443 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0444",
    ruleName: "Quality Criterion 08-0444 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0445",
    ruleName: "Quality Criterion 08-0445 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0446",
    ruleName: "Quality Criterion 08-0446 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0447",
    ruleName: "Quality Criterion 08-0447 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0448",
    ruleName: "Quality Criterion 08-0448 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0449",
    ruleName: "Quality Criterion 08-0449 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0450",
    ruleName: "Quality Criterion 08-0450 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0451",
    ruleName: "Quality Criterion 08-0451 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0452",
    ruleName: "Quality Criterion 08-0452 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0453",
    ruleName: "Quality Criterion 08-0453 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0454",
    ruleName: "Quality Criterion 08-0454 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0455",
    ruleName: "Quality Criterion 08-0455 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0456",
    ruleName: "Quality Criterion 08-0456 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0457",
    ruleName: "Quality Criterion 08-0457 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0458",
    ruleName: "Quality Criterion 08-0458 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0459",
    ruleName: "Quality Criterion 08-0459 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0460",
    ruleName: "Quality Criterion 08-0460 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0461",
    ruleName: "Quality Criterion 08-0461 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0462",
    ruleName: "Quality Criterion 08-0462 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0463",
    ruleName: "Quality Criterion 08-0463 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0464",
    ruleName: "Quality Criterion 08-0464 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0465",
    ruleName: "Quality Criterion 08-0465 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0466",
    ruleName: "Quality Criterion 08-0466 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0467",
    ruleName: "Quality Criterion 08-0467 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0468",
    ruleName: "Quality Criterion 08-0468 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0469",
    ruleName: "Quality Criterion 08-0469 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0470",
    ruleName: "Quality Criterion 08-0470 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0471",
    ruleName: "Quality Criterion 08-0471 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0472",
    ruleName: "Quality Criterion 08-0472 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0473",
    ruleName: "Quality Criterion 08-0473 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0474",
    ruleName: "Quality Criterion 08-0474 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0475",
    ruleName: "Quality Criterion 08-0475 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0476",
    ruleName: "Quality Criterion 08-0476 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0477",
    ruleName: "Quality Criterion 08-0477 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0478",
    ruleName: "Quality Criterion 08-0478 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0479",
    ruleName: "Quality Criterion 08-0479 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0480",
    ruleName: "Quality Criterion 08-0480 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0481",
    ruleName: "Quality Criterion 08-0481 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0482",
    ruleName: "Quality Criterion 08-0482 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0483",
    ruleName: "Quality Criterion 08-0483 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0484",
    ruleName: "Quality Criterion 08-0484 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0485",
    ruleName: "Quality Criterion 08-0485 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0486",
    ruleName: "Quality Criterion 08-0486 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0487",
    ruleName: "Quality Criterion 08-0487 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0488",
    ruleName: "Quality Criterion 08-0488 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0489",
    ruleName: "Quality Criterion 08-0489 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0490",
    ruleName: "Quality Criterion 08-0490 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0491",
    ruleName: "Quality Criterion 08-0491 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0492",
    ruleName: "Quality Criterion 08-0492 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0493",
    ruleName: "Quality Criterion 08-0493 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0494",
    ruleName: "Quality Criterion 08-0494 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0495",
    ruleName: "Quality Criterion 08-0495 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0496",
    ruleName: "Quality Criterion 08-0496 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0497",
    ruleName: "Quality Criterion 08-0497 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0498",
    ruleName: "Quality Criterion 08-0498 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0499",
    ruleName: "Quality Criterion 08-0499 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0500",
    ruleName: "Quality Criterion 08-0500 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0501",
    ruleName: "Quality Criterion 08-0501 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0502",
    ruleName: "Quality Criterion 08-0502 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0503",
    ruleName: "Quality Criterion 08-0503 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0504",
    ruleName: "Quality Criterion 08-0504 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0505",
    ruleName: "Quality Criterion 08-0505 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0506",
    ruleName: "Quality Criterion 08-0506 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0507",
    ruleName: "Quality Criterion 08-0507 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0508",
    ruleName: "Quality Criterion 08-0508 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0509",
    ruleName: "Quality Criterion 08-0509 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0510",
    ruleName: "Quality Criterion 08-0510 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0511",
    ruleName: "Quality Criterion 08-0511 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0512",
    ruleName: "Quality Criterion 08-0512 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0513",
    ruleName: "Quality Criterion 08-0513 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0514",
    ruleName: "Quality Criterion 08-0514 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0515",
    ruleName: "Quality Criterion 08-0515 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0516",
    ruleName: "Quality Criterion 08-0516 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0517",
    ruleName: "Quality Criterion 08-0517 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0518",
    ruleName: "Quality Criterion 08-0518 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0519",
    ruleName: "Quality Criterion 08-0519 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0520",
    ruleName: "Quality Criterion 08-0520 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0521",
    ruleName: "Quality Criterion 08-0521 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0522",
    ruleName: "Quality Criterion 08-0522 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0523",
    ruleName: "Quality Criterion 08-0523 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0524",
    ruleName: "Quality Criterion 08-0524 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0525",
    ruleName: "Quality Criterion 08-0525 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0526",
    ruleName: "Quality Criterion 08-0526 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0527",
    ruleName: "Quality Criterion 08-0527 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0528",
    ruleName: "Quality Criterion 08-0528 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0529",
    ruleName: "Quality Criterion 08-0529 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0530",
    ruleName: "Quality Criterion 08-0530 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0531",
    ruleName: "Quality Criterion 08-0531 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0532",
    ruleName: "Quality Criterion 08-0532 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0533",
    ruleName: "Quality Criterion 08-0533 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0534",
    ruleName: "Quality Criterion 08-0534 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0535",
    ruleName: "Quality Criterion 08-0535 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0536",
    ruleName: "Quality Criterion 08-0536 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0537",
    ruleName: "Quality Criterion 08-0537 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0538",
    ruleName: "Quality Criterion 08-0538 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0539",
    ruleName: "Quality Criterion 08-0539 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0540",
    ruleName: "Quality Criterion 08-0540 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0541",
    ruleName: "Quality Criterion 08-0541 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0542",
    ruleName: "Quality Criterion 08-0542 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0543",
    ruleName: "Quality Criterion 08-0543 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0544",
    ruleName: "Quality Criterion 08-0544 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0545",
    ruleName: "Quality Criterion 08-0545 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0546",
    ruleName: "Quality Criterion 08-0546 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0547",
    ruleName: "Quality Criterion 08-0547 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0548",
    ruleName: "Quality Criterion 08-0548 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0549",
    ruleName: "Quality Criterion 08-0549 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0550",
    ruleName: "Quality Criterion 08-0550 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0551",
    ruleName: "Quality Criterion 08-0551 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0552",
    ruleName: "Quality Criterion 08-0552 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0553",
    ruleName: "Quality Criterion 08-0553 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0554",
    ruleName: "Quality Criterion 08-0554 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0555",
    ruleName: "Quality Criterion 08-0555 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0556",
    ruleName: "Quality Criterion 08-0556 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0557",
    ruleName: "Quality Criterion 08-0557 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0558",
    ruleName: "Quality Criterion 08-0558 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0559",
    ruleName: "Quality Criterion 08-0559 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0560",
    ruleName: "Quality Criterion 08-0560 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0561",
    ruleName: "Quality Criterion 08-0561 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0562",
    ruleName: "Quality Criterion 08-0562 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0563",
    ruleName: "Quality Criterion 08-0563 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0564",
    ruleName: "Quality Criterion 08-0564 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0565",
    ruleName: "Quality Criterion 08-0565 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0566",
    ruleName: "Quality Criterion 08-0566 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0567",
    ruleName: "Quality Criterion 08-0567 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0568",
    ruleName: "Quality Criterion 08-0568 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0569",
    ruleName: "Quality Criterion 08-0569 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0570",
    ruleName: "Quality Criterion 08-0570 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0571",
    ruleName: "Quality Criterion 08-0571 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0572",
    ruleName: "Quality Criterion 08-0572 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0573",
    ruleName: "Quality Criterion 08-0573 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0574",
    ruleName: "Quality Criterion 08-0574 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0575",
    ruleName: "Quality Criterion 08-0575 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0576",
    ruleName: "Quality Criterion 08-0576 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0577",
    ruleName: "Quality Criterion 08-0577 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0578",
    ruleName: "Quality Criterion 08-0578 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0579",
    ruleName: "Quality Criterion 08-0579 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0580",
    ruleName: "Quality Criterion 08-0580 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0581",
    ruleName: "Quality Criterion 08-0581 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0582",
    ruleName: "Quality Criterion 08-0582 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0583",
    ruleName: "Quality Criterion 08-0583 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0584",
    ruleName: "Quality Criterion 08-0584 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0585",
    ruleName: "Quality Criterion 08-0585 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0586",
    ruleName: "Quality Criterion 08-0586 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0587",
    ruleName: "Quality Criterion 08-0587 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0588",
    ruleName: "Quality Criterion 08-0588 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0589",
    ruleName: "Quality Criterion 08-0589 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0590",
    ruleName: "Quality Criterion 08-0590 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0591",
    ruleName: "Quality Criterion 08-0591 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0592",
    ruleName: "Quality Criterion 08-0592 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0593",
    ruleName: "Quality Criterion 08-0593 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0594",
    ruleName: "Quality Criterion 08-0594 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0595",
    ruleName: "Quality Criterion 08-0595 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0596",
    ruleName: "Quality Criterion 08-0596 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0597",
    ruleName: "Quality Criterion 08-0597 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0598",
    ruleName: "Quality Criterion 08-0598 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0599",
    ruleName: "Quality Criterion 08-0599 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0600",
    ruleName: "Quality Criterion 08-0600 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0601",
    ruleName: "Quality Criterion 08-0601 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0602",
    ruleName: "Quality Criterion 08-0602 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0603",
    ruleName: "Quality Criterion 08-0603 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0604",
    ruleName: "Quality Criterion 08-0604 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0605",
    ruleName: "Quality Criterion 08-0605 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0606",
    ruleName: "Quality Criterion 08-0606 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0607",
    ruleName: "Quality Criterion 08-0607 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0608",
    ruleName: "Quality Criterion 08-0608 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0609",
    ruleName: "Quality Criterion 08-0609 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0610",
    ruleName: "Quality Criterion 08-0610 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0611",
    ruleName: "Quality Criterion 08-0611 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0612",
    ruleName: "Quality Criterion 08-0612 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0613",
    ruleName: "Quality Criterion 08-0613 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0614",
    ruleName: "Quality Criterion 08-0614 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0615",
    ruleName: "Quality Criterion 08-0615 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0616",
    ruleName: "Quality Criterion 08-0616 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0617",
    ruleName: "Quality Criterion 08-0617 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0618",
    ruleName: "Quality Criterion 08-0618 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0619",
    ruleName: "Quality Criterion 08-0619 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0620",
    ruleName: "Quality Criterion 08-0620 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0621",
    ruleName: "Quality Criterion 08-0621 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0622",
    ruleName: "Quality Criterion 08-0622 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0623",
    ruleName: "Quality Criterion 08-0623 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0624",
    ruleName: "Quality Criterion 08-0624 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0625",
    ruleName: "Quality Criterion 08-0625 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0626",
    ruleName: "Quality Criterion 08-0626 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0627",
    ruleName: "Quality Criterion 08-0627 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0628",
    ruleName: "Quality Criterion 08-0628 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0629",
    ruleName: "Quality Criterion 08-0629 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0630",
    ruleName: "Quality Criterion 08-0630 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0631",
    ruleName: "Quality Criterion 08-0631 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0632",
    ruleName: "Quality Criterion 08-0632 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0633",
    ruleName: "Quality Criterion 08-0633 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0634",
    ruleName: "Quality Criterion 08-0634 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0635",
    ruleName: "Quality Criterion 08-0635 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0636",
    ruleName: "Quality Criterion 08-0636 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0637",
    ruleName: "Quality Criterion 08-0637 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0638",
    ruleName: "Quality Criterion 08-0638 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0639",
    ruleName: "Quality Criterion 08-0639 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0640",
    ruleName: "Quality Criterion 08-0640 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0641",
    ruleName: "Quality Criterion 08-0641 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0642",
    ruleName: "Quality Criterion 08-0642 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0643",
    ruleName: "Quality Criterion 08-0643 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0644",
    ruleName: "Quality Criterion 08-0644 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0645",
    ruleName: "Quality Criterion 08-0645 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0646",
    ruleName: "Quality Criterion 08-0646 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0647",
    ruleName: "Quality Criterion 08-0647 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0648",
    ruleName: "Quality Criterion 08-0648 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0649",
    ruleName: "Quality Criterion 08-0649 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0650",
    ruleName: "Quality Criterion 08-0650 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0651",
    ruleName: "Quality Criterion 08-0651 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0652",
    ruleName: "Quality Criterion 08-0652 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0653",
    ruleName: "Quality Criterion 08-0653 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0654",
    ruleName: "Quality Criterion 08-0654 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0655",
    ruleName: "Quality Criterion 08-0655 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0656",
    ruleName: "Quality Criterion 08-0656 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0657",
    ruleName: "Quality Criterion 08-0657 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0658",
    ruleName: "Quality Criterion 08-0658 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0659",
    ruleName: "Quality Criterion 08-0659 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0660",
    ruleName: "Quality Criterion 08-0660 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0661",
    ruleName: "Quality Criterion 08-0661 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0662",
    ruleName: "Quality Criterion 08-0662 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0663",
    ruleName: "Quality Criterion 08-0663 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0664",
    ruleName: "Quality Criterion 08-0664 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0665",
    ruleName: "Quality Criterion 08-0665 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0666",
    ruleName: "Quality Criterion 08-0666 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0667",
    ruleName: "Quality Criterion 08-0667 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0668",
    ruleName: "Quality Criterion 08-0668 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0669",
    ruleName: "Quality Criterion 08-0669 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0670",
    ruleName: "Quality Criterion 08-0670 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0671",
    ruleName: "Quality Criterion 08-0671 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0672",
    ruleName: "Quality Criterion 08-0672 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0673",
    ruleName: "Quality Criterion 08-0673 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0674",
    ruleName: "Quality Criterion 08-0674 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0675",
    ruleName: "Quality Criterion 08-0675 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0676",
    ruleName: "Quality Criterion 08-0676 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0677",
    ruleName: "Quality Criterion 08-0677 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0678",
    ruleName: "Quality Criterion 08-0678 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0679",
    ruleName: "Quality Criterion 08-0679 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0680",
    ruleName: "Quality Criterion 08-0680 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0681",
    ruleName: "Quality Criterion 08-0681 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0682",
    ruleName: "Quality Criterion 08-0682 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0683",
    ruleName: "Quality Criterion 08-0683 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0684",
    ruleName: "Quality Criterion 08-0684 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0685",
    ruleName: "Quality Criterion 08-0685 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0686",
    ruleName: "Quality Criterion 08-0686 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0687",
    ruleName: "Quality Criterion 08-0687 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0688",
    ruleName: "Quality Criterion 08-0688 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0689",
    ruleName: "Quality Criterion 08-0689 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0690",
    ruleName: "Quality Criterion 08-0690 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0691",
    ruleName: "Quality Criterion 08-0691 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0692",
    ruleName: "Quality Criterion 08-0692 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0693",
    ruleName: "Quality Criterion 08-0693 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0694",
    ruleName: "Quality Criterion 08-0694 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0695",
    ruleName: "Quality Criterion 08-0695 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0696",
    ruleName: "Quality Criterion 08-0696 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0697",
    ruleName: "Quality Criterion 08-0697 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0698",
    ruleName: "Quality Criterion 08-0698 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0699",
    ruleName: "Quality Criterion 08-0699 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0700",
    ruleName: "Quality Criterion 08-0700 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0701",
    ruleName: "Quality Criterion 08-0701 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0702",
    ruleName: "Quality Criterion 08-0702 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0703",
    ruleName: "Quality Criterion 08-0703 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0704",
    ruleName: "Quality Criterion 08-0704 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0705",
    ruleName: "Quality Criterion 08-0705 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0706",
    ruleName: "Quality Criterion 08-0706 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0707",
    ruleName: "Quality Criterion 08-0707 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0708",
    ruleName: "Quality Criterion 08-0708 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0709",
    ruleName: "Quality Criterion 08-0709 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0710",
    ruleName: "Quality Criterion 08-0710 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0711",
    ruleName: "Quality Criterion 08-0711 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0712",
    ruleName: "Quality Criterion 08-0712 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0713",
    ruleName: "Quality Criterion 08-0713 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0714",
    ruleName: "Quality Criterion 08-0714 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0715",
    ruleName: "Quality Criterion 08-0715 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0716",
    ruleName: "Quality Criterion 08-0716 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0717",
    ruleName: "Quality Criterion 08-0717 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0718",
    ruleName: "Quality Criterion 08-0718 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0719",
    ruleName: "Quality Criterion 08-0719 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0720",
    ruleName: "Quality Criterion 08-0720 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0721",
    ruleName: "Quality Criterion 08-0721 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0722",
    ruleName: "Quality Criterion 08-0722 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0723",
    ruleName: "Quality Criterion 08-0723 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0724",
    ruleName: "Quality Criterion 08-0724 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0725",
    ruleName: "Quality Criterion 08-0725 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0726",
    ruleName: "Quality Criterion 08-0726 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0727",
    ruleName: "Quality Criterion 08-0727 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 08.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0728",
    ruleName: "Quality Criterion 08-0728 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 08.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0729",
    ruleName: "Quality Criterion 08-0729 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 08.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0730",
    ruleName: "Quality Criterion 08-0730 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 08.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-08-0731",
    ruleName: "Quality Criterion 08-0731 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 08.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-08-0732",
    ruleName: "Quality Criterion 08-0732 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 08.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-08-0733",
    ruleName: "Quality Criterion 08-0733 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 08.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-08-0734",
    ruleName: "Quality Criterion 08-0734 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 08.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
];

export function evaluateRules08(section: SectionKey): QualityRule08[] {
  return QUALITY_RULES_08.filter(r => r.targetSection === section);
}

export function calculateTotalWeight08(): number {
  return QUALITY_RULES_08.reduce((sum, r) => sum + r.weight, 0);
}


// PR #056 Enhancement: feat(engine): Create design direction color system and accessibility validator

// PR #066 Enhancement: feat(engine): Create error handling and exception flow quality inspectors

// Live GitHub PR #056 [1789472004.3771384]: feat(engine): Create design direction color system and accessibility validator
