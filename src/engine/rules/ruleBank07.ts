import { SectionKey } from '../../types/prompt';

export interface QualityRule07 {
  id: string;
  ruleName: string;
  targetSection: SectionKey;
  weight: number;
  description: string;
  validationKeywords: string[];
  remediationGuidance: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export const QUALITY_RULES_07: QualityRule07[] = [
  {
    id: "rule-07-0001",
    ruleName: "Quality Criterion 07-0001 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0002",
    ruleName: "Quality Criterion 07-0002 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0003",
    ruleName: "Quality Criterion 07-0003 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0004",
    ruleName: "Quality Criterion 07-0004 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0005",
    ruleName: "Quality Criterion 07-0005 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0006",
    ruleName: "Quality Criterion 07-0006 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0007",
    ruleName: "Quality Criterion 07-0007 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0008",
    ruleName: "Quality Criterion 07-0008 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0009",
    ruleName: "Quality Criterion 07-0009 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0010",
    ruleName: "Quality Criterion 07-0010 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0011",
    ruleName: "Quality Criterion 07-0011 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0012",
    ruleName: "Quality Criterion 07-0012 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0013",
    ruleName: "Quality Criterion 07-0013 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0014",
    ruleName: "Quality Criterion 07-0014 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0015",
    ruleName: "Quality Criterion 07-0015 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0016",
    ruleName: "Quality Criterion 07-0016 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0017",
    ruleName: "Quality Criterion 07-0017 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0018",
    ruleName: "Quality Criterion 07-0018 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0019",
    ruleName: "Quality Criterion 07-0019 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0020",
    ruleName: "Quality Criterion 07-0020 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0021",
    ruleName: "Quality Criterion 07-0021 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0022",
    ruleName: "Quality Criterion 07-0022 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0023",
    ruleName: "Quality Criterion 07-0023 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0024",
    ruleName: "Quality Criterion 07-0024 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0025",
    ruleName: "Quality Criterion 07-0025 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0026",
    ruleName: "Quality Criterion 07-0026 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0027",
    ruleName: "Quality Criterion 07-0027 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0028",
    ruleName: "Quality Criterion 07-0028 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0029",
    ruleName: "Quality Criterion 07-0029 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0030",
    ruleName: "Quality Criterion 07-0030 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0031",
    ruleName: "Quality Criterion 07-0031 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0032",
    ruleName: "Quality Criterion 07-0032 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0033",
    ruleName: "Quality Criterion 07-0033 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0034",
    ruleName: "Quality Criterion 07-0034 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0035",
    ruleName: "Quality Criterion 07-0035 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0036",
    ruleName: "Quality Criterion 07-0036 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0037",
    ruleName: "Quality Criterion 07-0037 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0038",
    ruleName: "Quality Criterion 07-0038 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0039",
    ruleName: "Quality Criterion 07-0039 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0040",
    ruleName: "Quality Criterion 07-0040 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0041",
    ruleName: "Quality Criterion 07-0041 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0042",
    ruleName: "Quality Criterion 07-0042 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0043",
    ruleName: "Quality Criterion 07-0043 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0044",
    ruleName: "Quality Criterion 07-0044 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0045",
    ruleName: "Quality Criterion 07-0045 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0046",
    ruleName: "Quality Criterion 07-0046 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0047",
    ruleName: "Quality Criterion 07-0047 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0048",
    ruleName: "Quality Criterion 07-0048 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0049",
    ruleName: "Quality Criterion 07-0049 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0050",
    ruleName: "Quality Criterion 07-0050 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0051",
    ruleName: "Quality Criterion 07-0051 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0052",
    ruleName: "Quality Criterion 07-0052 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0053",
    ruleName: "Quality Criterion 07-0053 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0054",
    ruleName: "Quality Criterion 07-0054 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0055",
    ruleName: "Quality Criterion 07-0055 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0056",
    ruleName: "Quality Criterion 07-0056 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0057",
    ruleName: "Quality Criterion 07-0057 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0058",
    ruleName: "Quality Criterion 07-0058 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0059",
    ruleName: "Quality Criterion 07-0059 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0060",
    ruleName: "Quality Criterion 07-0060 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0061",
    ruleName: "Quality Criterion 07-0061 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0062",
    ruleName: "Quality Criterion 07-0062 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0063",
    ruleName: "Quality Criterion 07-0063 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0064",
    ruleName: "Quality Criterion 07-0064 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0065",
    ruleName: "Quality Criterion 07-0065 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0066",
    ruleName: "Quality Criterion 07-0066 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0067",
    ruleName: "Quality Criterion 07-0067 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0068",
    ruleName: "Quality Criterion 07-0068 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0069",
    ruleName: "Quality Criterion 07-0069 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0070",
    ruleName: "Quality Criterion 07-0070 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0071",
    ruleName: "Quality Criterion 07-0071 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0072",
    ruleName: "Quality Criterion 07-0072 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0073",
    ruleName: "Quality Criterion 07-0073 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0074",
    ruleName: "Quality Criterion 07-0074 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0075",
    ruleName: "Quality Criterion 07-0075 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0076",
    ruleName: "Quality Criterion 07-0076 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0077",
    ruleName: "Quality Criterion 07-0077 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0078",
    ruleName: "Quality Criterion 07-0078 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0079",
    ruleName: "Quality Criterion 07-0079 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0080",
    ruleName: "Quality Criterion 07-0080 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0081",
    ruleName: "Quality Criterion 07-0081 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0082",
    ruleName: "Quality Criterion 07-0082 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0083",
    ruleName: "Quality Criterion 07-0083 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0084",
    ruleName: "Quality Criterion 07-0084 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0085",
    ruleName: "Quality Criterion 07-0085 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0086",
    ruleName: "Quality Criterion 07-0086 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0087",
    ruleName: "Quality Criterion 07-0087 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0088",
    ruleName: "Quality Criterion 07-0088 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0089",
    ruleName: "Quality Criterion 07-0089 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0090",
    ruleName: "Quality Criterion 07-0090 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0091",
    ruleName: "Quality Criterion 07-0091 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0092",
    ruleName: "Quality Criterion 07-0092 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0093",
    ruleName: "Quality Criterion 07-0093 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0094",
    ruleName: "Quality Criterion 07-0094 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0095",
    ruleName: "Quality Criterion 07-0095 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0096",
    ruleName: "Quality Criterion 07-0096 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0097",
    ruleName: "Quality Criterion 07-0097 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0098",
    ruleName: "Quality Criterion 07-0098 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0099",
    ruleName: "Quality Criterion 07-0099 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0100",
    ruleName: "Quality Criterion 07-0100 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0101",
    ruleName: "Quality Criterion 07-0101 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0102",
    ruleName: "Quality Criterion 07-0102 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0103",
    ruleName: "Quality Criterion 07-0103 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0104",
    ruleName: "Quality Criterion 07-0104 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0105",
    ruleName: "Quality Criterion 07-0105 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0106",
    ruleName: "Quality Criterion 07-0106 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0107",
    ruleName: "Quality Criterion 07-0107 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0108",
    ruleName: "Quality Criterion 07-0108 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0109",
    ruleName: "Quality Criterion 07-0109 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0110",
    ruleName: "Quality Criterion 07-0110 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0111",
    ruleName: "Quality Criterion 07-0111 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0112",
    ruleName: "Quality Criterion 07-0112 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0113",
    ruleName: "Quality Criterion 07-0113 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0114",
    ruleName: "Quality Criterion 07-0114 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0115",
    ruleName: "Quality Criterion 07-0115 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0116",
    ruleName: "Quality Criterion 07-0116 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0117",
    ruleName: "Quality Criterion 07-0117 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0118",
    ruleName: "Quality Criterion 07-0118 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0119",
    ruleName: "Quality Criterion 07-0119 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0120",
    ruleName: "Quality Criterion 07-0120 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0121",
    ruleName: "Quality Criterion 07-0121 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0122",
    ruleName: "Quality Criterion 07-0122 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0123",
    ruleName: "Quality Criterion 07-0123 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0124",
    ruleName: "Quality Criterion 07-0124 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0125",
    ruleName: "Quality Criterion 07-0125 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0126",
    ruleName: "Quality Criterion 07-0126 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0127",
    ruleName: "Quality Criterion 07-0127 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0128",
    ruleName: "Quality Criterion 07-0128 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0129",
    ruleName: "Quality Criterion 07-0129 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0130",
    ruleName: "Quality Criterion 07-0130 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0131",
    ruleName: "Quality Criterion 07-0131 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0132",
    ruleName: "Quality Criterion 07-0132 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0133",
    ruleName: "Quality Criterion 07-0133 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0134",
    ruleName: "Quality Criterion 07-0134 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0135",
    ruleName: "Quality Criterion 07-0135 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0136",
    ruleName: "Quality Criterion 07-0136 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0137",
    ruleName: "Quality Criterion 07-0137 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0138",
    ruleName: "Quality Criterion 07-0138 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0139",
    ruleName: "Quality Criterion 07-0139 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0140",
    ruleName: "Quality Criterion 07-0140 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0141",
    ruleName: "Quality Criterion 07-0141 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0142",
    ruleName: "Quality Criterion 07-0142 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0143",
    ruleName: "Quality Criterion 07-0143 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0144",
    ruleName: "Quality Criterion 07-0144 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0145",
    ruleName: "Quality Criterion 07-0145 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0146",
    ruleName: "Quality Criterion 07-0146 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0147",
    ruleName: "Quality Criterion 07-0147 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0148",
    ruleName: "Quality Criterion 07-0148 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0149",
    ruleName: "Quality Criterion 07-0149 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0150",
    ruleName: "Quality Criterion 07-0150 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0151",
    ruleName: "Quality Criterion 07-0151 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0152",
    ruleName: "Quality Criterion 07-0152 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0153",
    ruleName: "Quality Criterion 07-0153 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0154",
    ruleName: "Quality Criterion 07-0154 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0155",
    ruleName: "Quality Criterion 07-0155 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0156",
    ruleName: "Quality Criterion 07-0156 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0157",
    ruleName: "Quality Criterion 07-0157 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0158",
    ruleName: "Quality Criterion 07-0158 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0159",
    ruleName: "Quality Criterion 07-0159 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0160",
    ruleName: "Quality Criterion 07-0160 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0161",
    ruleName: "Quality Criterion 07-0161 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0162",
    ruleName: "Quality Criterion 07-0162 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0163",
    ruleName: "Quality Criterion 07-0163 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0164",
    ruleName: "Quality Criterion 07-0164 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0165",
    ruleName: "Quality Criterion 07-0165 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0166",
    ruleName: "Quality Criterion 07-0166 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0167",
    ruleName: "Quality Criterion 07-0167 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0168",
    ruleName: "Quality Criterion 07-0168 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0169",
    ruleName: "Quality Criterion 07-0169 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0170",
    ruleName: "Quality Criterion 07-0170 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0171",
    ruleName: "Quality Criterion 07-0171 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0172",
    ruleName: "Quality Criterion 07-0172 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0173",
    ruleName: "Quality Criterion 07-0173 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0174",
    ruleName: "Quality Criterion 07-0174 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0175",
    ruleName: "Quality Criterion 07-0175 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0176",
    ruleName: "Quality Criterion 07-0176 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0177",
    ruleName: "Quality Criterion 07-0177 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0178",
    ruleName: "Quality Criterion 07-0178 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0179",
    ruleName: "Quality Criterion 07-0179 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0180",
    ruleName: "Quality Criterion 07-0180 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0181",
    ruleName: "Quality Criterion 07-0181 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0182",
    ruleName: "Quality Criterion 07-0182 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0183",
    ruleName: "Quality Criterion 07-0183 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0184",
    ruleName: "Quality Criterion 07-0184 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0185",
    ruleName: "Quality Criterion 07-0185 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0186",
    ruleName: "Quality Criterion 07-0186 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0187",
    ruleName: "Quality Criterion 07-0187 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0188",
    ruleName: "Quality Criterion 07-0188 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0189",
    ruleName: "Quality Criterion 07-0189 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0190",
    ruleName: "Quality Criterion 07-0190 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0191",
    ruleName: "Quality Criterion 07-0191 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0192",
    ruleName: "Quality Criterion 07-0192 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0193",
    ruleName: "Quality Criterion 07-0193 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0194",
    ruleName: "Quality Criterion 07-0194 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0195",
    ruleName: "Quality Criterion 07-0195 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0196",
    ruleName: "Quality Criterion 07-0196 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0197",
    ruleName: "Quality Criterion 07-0197 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0198",
    ruleName: "Quality Criterion 07-0198 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0199",
    ruleName: "Quality Criterion 07-0199 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0200",
    ruleName: "Quality Criterion 07-0200 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0201",
    ruleName: "Quality Criterion 07-0201 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0202",
    ruleName: "Quality Criterion 07-0202 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0203",
    ruleName: "Quality Criterion 07-0203 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0204",
    ruleName: "Quality Criterion 07-0204 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0205",
    ruleName: "Quality Criterion 07-0205 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0206",
    ruleName: "Quality Criterion 07-0206 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0207",
    ruleName: "Quality Criterion 07-0207 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0208",
    ruleName: "Quality Criterion 07-0208 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0209",
    ruleName: "Quality Criterion 07-0209 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0210",
    ruleName: "Quality Criterion 07-0210 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0211",
    ruleName: "Quality Criterion 07-0211 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0212",
    ruleName: "Quality Criterion 07-0212 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0213",
    ruleName: "Quality Criterion 07-0213 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0214",
    ruleName: "Quality Criterion 07-0214 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0215",
    ruleName: "Quality Criterion 07-0215 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0216",
    ruleName: "Quality Criterion 07-0216 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0217",
    ruleName: "Quality Criterion 07-0217 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0218",
    ruleName: "Quality Criterion 07-0218 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0219",
    ruleName: "Quality Criterion 07-0219 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0220",
    ruleName: "Quality Criterion 07-0220 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0221",
    ruleName: "Quality Criterion 07-0221 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0222",
    ruleName: "Quality Criterion 07-0222 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0223",
    ruleName: "Quality Criterion 07-0223 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0224",
    ruleName: "Quality Criterion 07-0224 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0225",
    ruleName: "Quality Criterion 07-0225 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0226",
    ruleName: "Quality Criterion 07-0226 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0227",
    ruleName: "Quality Criterion 07-0227 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0228",
    ruleName: "Quality Criterion 07-0228 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0229",
    ruleName: "Quality Criterion 07-0229 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0230",
    ruleName: "Quality Criterion 07-0230 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0231",
    ruleName: "Quality Criterion 07-0231 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0232",
    ruleName: "Quality Criterion 07-0232 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0233",
    ruleName: "Quality Criterion 07-0233 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0234",
    ruleName: "Quality Criterion 07-0234 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0235",
    ruleName: "Quality Criterion 07-0235 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0236",
    ruleName: "Quality Criterion 07-0236 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0237",
    ruleName: "Quality Criterion 07-0237 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0238",
    ruleName: "Quality Criterion 07-0238 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0239",
    ruleName: "Quality Criterion 07-0239 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0240",
    ruleName: "Quality Criterion 07-0240 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0241",
    ruleName: "Quality Criterion 07-0241 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0242",
    ruleName: "Quality Criterion 07-0242 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0243",
    ruleName: "Quality Criterion 07-0243 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0244",
    ruleName: "Quality Criterion 07-0244 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0245",
    ruleName: "Quality Criterion 07-0245 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0246",
    ruleName: "Quality Criterion 07-0246 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0247",
    ruleName: "Quality Criterion 07-0247 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0248",
    ruleName: "Quality Criterion 07-0248 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0249",
    ruleName: "Quality Criterion 07-0249 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0250",
    ruleName: "Quality Criterion 07-0250 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0251",
    ruleName: "Quality Criterion 07-0251 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0252",
    ruleName: "Quality Criterion 07-0252 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0253",
    ruleName: "Quality Criterion 07-0253 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0254",
    ruleName: "Quality Criterion 07-0254 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0255",
    ruleName: "Quality Criterion 07-0255 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0256",
    ruleName: "Quality Criterion 07-0256 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0257",
    ruleName: "Quality Criterion 07-0257 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0258",
    ruleName: "Quality Criterion 07-0258 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0259",
    ruleName: "Quality Criterion 07-0259 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0260",
    ruleName: "Quality Criterion 07-0260 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0261",
    ruleName: "Quality Criterion 07-0261 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0262",
    ruleName: "Quality Criterion 07-0262 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0263",
    ruleName: "Quality Criterion 07-0263 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0264",
    ruleName: "Quality Criterion 07-0264 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0265",
    ruleName: "Quality Criterion 07-0265 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0266",
    ruleName: "Quality Criterion 07-0266 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0267",
    ruleName: "Quality Criterion 07-0267 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0268",
    ruleName: "Quality Criterion 07-0268 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0269",
    ruleName: "Quality Criterion 07-0269 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0270",
    ruleName: "Quality Criterion 07-0270 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0271",
    ruleName: "Quality Criterion 07-0271 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0272",
    ruleName: "Quality Criterion 07-0272 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0273",
    ruleName: "Quality Criterion 07-0273 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0274",
    ruleName: "Quality Criterion 07-0274 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0275",
    ruleName: "Quality Criterion 07-0275 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0276",
    ruleName: "Quality Criterion 07-0276 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0277",
    ruleName: "Quality Criterion 07-0277 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0278",
    ruleName: "Quality Criterion 07-0278 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0279",
    ruleName: "Quality Criterion 07-0279 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0280",
    ruleName: "Quality Criterion 07-0280 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0281",
    ruleName: "Quality Criterion 07-0281 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0282",
    ruleName: "Quality Criterion 07-0282 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0283",
    ruleName: "Quality Criterion 07-0283 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0284",
    ruleName: "Quality Criterion 07-0284 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0285",
    ruleName: "Quality Criterion 07-0285 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0286",
    ruleName: "Quality Criterion 07-0286 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0287",
    ruleName: "Quality Criterion 07-0287 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0288",
    ruleName: "Quality Criterion 07-0288 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0289",
    ruleName: "Quality Criterion 07-0289 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0290",
    ruleName: "Quality Criterion 07-0290 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0291",
    ruleName: "Quality Criterion 07-0291 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0292",
    ruleName: "Quality Criterion 07-0292 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0293",
    ruleName: "Quality Criterion 07-0293 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0294",
    ruleName: "Quality Criterion 07-0294 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0295",
    ruleName: "Quality Criterion 07-0295 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0296",
    ruleName: "Quality Criterion 07-0296 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0297",
    ruleName: "Quality Criterion 07-0297 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0298",
    ruleName: "Quality Criterion 07-0298 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0299",
    ruleName: "Quality Criterion 07-0299 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0300",
    ruleName: "Quality Criterion 07-0300 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0301",
    ruleName: "Quality Criterion 07-0301 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0302",
    ruleName: "Quality Criterion 07-0302 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0303",
    ruleName: "Quality Criterion 07-0303 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0304",
    ruleName: "Quality Criterion 07-0304 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0305",
    ruleName: "Quality Criterion 07-0305 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0306",
    ruleName: "Quality Criterion 07-0306 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0307",
    ruleName: "Quality Criterion 07-0307 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0308",
    ruleName: "Quality Criterion 07-0308 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0309",
    ruleName: "Quality Criterion 07-0309 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0310",
    ruleName: "Quality Criterion 07-0310 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0311",
    ruleName: "Quality Criterion 07-0311 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0312",
    ruleName: "Quality Criterion 07-0312 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0313",
    ruleName: "Quality Criterion 07-0313 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0314",
    ruleName: "Quality Criterion 07-0314 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0315",
    ruleName: "Quality Criterion 07-0315 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0316",
    ruleName: "Quality Criterion 07-0316 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0317",
    ruleName: "Quality Criterion 07-0317 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0318",
    ruleName: "Quality Criterion 07-0318 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0319",
    ruleName: "Quality Criterion 07-0319 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0320",
    ruleName: "Quality Criterion 07-0320 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0321",
    ruleName: "Quality Criterion 07-0321 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0322",
    ruleName: "Quality Criterion 07-0322 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0323",
    ruleName: "Quality Criterion 07-0323 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0324",
    ruleName: "Quality Criterion 07-0324 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0325",
    ruleName: "Quality Criterion 07-0325 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0326",
    ruleName: "Quality Criterion 07-0326 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0327",
    ruleName: "Quality Criterion 07-0327 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0328",
    ruleName: "Quality Criterion 07-0328 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0329",
    ruleName: "Quality Criterion 07-0329 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0330",
    ruleName: "Quality Criterion 07-0330 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0331",
    ruleName: "Quality Criterion 07-0331 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0332",
    ruleName: "Quality Criterion 07-0332 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0333",
    ruleName: "Quality Criterion 07-0333 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0334",
    ruleName: "Quality Criterion 07-0334 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0335",
    ruleName: "Quality Criterion 07-0335 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0336",
    ruleName: "Quality Criterion 07-0336 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0337",
    ruleName: "Quality Criterion 07-0337 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0338",
    ruleName: "Quality Criterion 07-0338 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0339",
    ruleName: "Quality Criterion 07-0339 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0340",
    ruleName: "Quality Criterion 07-0340 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0341",
    ruleName: "Quality Criterion 07-0341 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0342",
    ruleName: "Quality Criterion 07-0342 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0343",
    ruleName: "Quality Criterion 07-0343 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0344",
    ruleName: "Quality Criterion 07-0344 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0345",
    ruleName: "Quality Criterion 07-0345 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0346",
    ruleName: "Quality Criterion 07-0346 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0347",
    ruleName: "Quality Criterion 07-0347 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0348",
    ruleName: "Quality Criterion 07-0348 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0349",
    ruleName: "Quality Criterion 07-0349 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0350",
    ruleName: "Quality Criterion 07-0350 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0351",
    ruleName: "Quality Criterion 07-0351 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0352",
    ruleName: "Quality Criterion 07-0352 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0353",
    ruleName: "Quality Criterion 07-0353 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0354",
    ruleName: "Quality Criterion 07-0354 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0355",
    ruleName: "Quality Criterion 07-0355 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0356",
    ruleName: "Quality Criterion 07-0356 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0357",
    ruleName: "Quality Criterion 07-0357 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0358",
    ruleName: "Quality Criterion 07-0358 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0359",
    ruleName: "Quality Criterion 07-0359 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0360",
    ruleName: "Quality Criterion 07-0360 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0361",
    ruleName: "Quality Criterion 07-0361 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0362",
    ruleName: "Quality Criterion 07-0362 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0363",
    ruleName: "Quality Criterion 07-0363 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0364",
    ruleName: "Quality Criterion 07-0364 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0365",
    ruleName: "Quality Criterion 07-0365 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0366",
    ruleName: "Quality Criterion 07-0366 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0367",
    ruleName: "Quality Criterion 07-0367 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0368",
    ruleName: "Quality Criterion 07-0368 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0369",
    ruleName: "Quality Criterion 07-0369 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0370",
    ruleName: "Quality Criterion 07-0370 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0371",
    ruleName: "Quality Criterion 07-0371 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0372",
    ruleName: "Quality Criterion 07-0372 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0373",
    ruleName: "Quality Criterion 07-0373 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0374",
    ruleName: "Quality Criterion 07-0374 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0375",
    ruleName: "Quality Criterion 07-0375 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0376",
    ruleName: "Quality Criterion 07-0376 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0377",
    ruleName: "Quality Criterion 07-0377 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0378",
    ruleName: "Quality Criterion 07-0378 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0379",
    ruleName: "Quality Criterion 07-0379 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0380",
    ruleName: "Quality Criterion 07-0380 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0381",
    ruleName: "Quality Criterion 07-0381 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0382",
    ruleName: "Quality Criterion 07-0382 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0383",
    ruleName: "Quality Criterion 07-0383 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0384",
    ruleName: "Quality Criterion 07-0384 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0385",
    ruleName: "Quality Criterion 07-0385 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0386",
    ruleName: "Quality Criterion 07-0386 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0387",
    ruleName: "Quality Criterion 07-0387 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0388",
    ruleName: "Quality Criterion 07-0388 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0389",
    ruleName: "Quality Criterion 07-0389 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0390",
    ruleName: "Quality Criterion 07-0390 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0391",
    ruleName: "Quality Criterion 07-0391 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0392",
    ruleName: "Quality Criterion 07-0392 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0393",
    ruleName: "Quality Criterion 07-0393 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0394",
    ruleName: "Quality Criterion 07-0394 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0395",
    ruleName: "Quality Criterion 07-0395 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0396",
    ruleName: "Quality Criterion 07-0396 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0397",
    ruleName: "Quality Criterion 07-0397 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0398",
    ruleName: "Quality Criterion 07-0398 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0399",
    ruleName: "Quality Criterion 07-0399 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0400",
    ruleName: "Quality Criterion 07-0400 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0401",
    ruleName: "Quality Criterion 07-0401 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0402",
    ruleName: "Quality Criterion 07-0402 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0403",
    ruleName: "Quality Criterion 07-0403 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0404",
    ruleName: "Quality Criterion 07-0404 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0405",
    ruleName: "Quality Criterion 07-0405 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0406",
    ruleName: "Quality Criterion 07-0406 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0407",
    ruleName: "Quality Criterion 07-0407 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0408",
    ruleName: "Quality Criterion 07-0408 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0409",
    ruleName: "Quality Criterion 07-0409 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0410",
    ruleName: "Quality Criterion 07-0410 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0411",
    ruleName: "Quality Criterion 07-0411 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0412",
    ruleName: "Quality Criterion 07-0412 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0413",
    ruleName: "Quality Criterion 07-0413 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0414",
    ruleName: "Quality Criterion 07-0414 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0415",
    ruleName: "Quality Criterion 07-0415 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0416",
    ruleName: "Quality Criterion 07-0416 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0417",
    ruleName: "Quality Criterion 07-0417 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0418",
    ruleName: "Quality Criterion 07-0418 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0419",
    ruleName: "Quality Criterion 07-0419 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0420",
    ruleName: "Quality Criterion 07-0420 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0421",
    ruleName: "Quality Criterion 07-0421 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0422",
    ruleName: "Quality Criterion 07-0422 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0423",
    ruleName: "Quality Criterion 07-0423 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0424",
    ruleName: "Quality Criterion 07-0424 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0425",
    ruleName: "Quality Criterion 07-0425 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0426",
    ruleName: "Quality Criterion 07-0426 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0427",
    ruleName: "Quality Criterion 07-0427 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0428",
    ruleName: "Quality Criterion 07-0428 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0429",
    ruleName: "Quality Criterion 07-0429 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0430",
    ruleName: "Quality Criterion 07-0430 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0431",
    ruleName: "Quality Criterion 07-0431 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0432",
    ruleName: "Quality Criterion 07-0432 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0433",
    ruleName: "Quality Criterion 07-0433 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0434",
    ruleName: "Quality Criterion 07-0434 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0435",
    ruleName: "Quality Criterion 07-0435 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0436",
    ruleName: "Quality Criterion 07-0436 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0437",
    ruleName: "Quality Criterion 07-0437 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0438",
    ruleName: "Quality Criterion 07-0438 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0439",
    ruleName: "Quality Criterion 07-0439 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0440",
    ruleName: "Quality Criterion 07-0440 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0441",
    ruleName: "Quality Criterion 07-0441 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0442",
    ruleName: "Quality Criterion 07-0442 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0443",
    ruleName: "Quality Criterion 07-0443 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0444",
    ruleName: "Quality Criterion 07-0444 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0445",
    ruleName: "Quality Criterion 07-0445 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0446",
    ruleName: "Quality Criterion 07-0446 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0447",
    ruleName: "Quality Criterion 07-0447 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0448",
    ruleName: "Quality Criterion 07-0448 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0449",
    ruleName: "Quality Criterion 07-0449 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0450",
    ruleName: "Quality Criterion 07-0450 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0451",
    ruleName: "Quality Criterion 07-0451 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0452",
    ruleName: "Quality Criterion 07-0452 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0453",
    ruleName: "Quality Criterion 07-0453 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0454",
    ruleName: "Quality Criterion 07-0454 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0455",
    ruleName: "Quality Criterion 07-0455 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0456",
    ruleName: "Quality Criterion 07-0456 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0457",
    ruleName: "Quality Criterion 07-0457 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0458",
    ruleName: "Quality Criterion 07-0458 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0459",
    ruleName: "Quality Criterion 07-0459 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0460",
    ruleName: "Quality Criterion 07-0460 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0461",
    ruleName: "Quality Criterion 07-0461 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0462",
    ruleName: "Quality Criterion 07-0462 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0463",
    ruleName: "Quality Criterion 07-0463 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0464",
    ruleName: "Quality Criterion 07-0464 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0465",
    ruleName: "Quality Criterion 07-0465 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0466",
    ruleName: "Quality Criterion 07-0466 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0467",
    ruleName: "Quality Criterion 07-0467 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0468",
    ruleName: "Quality Criterion 07-0468 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0469",
    ruleName: "Quality Criterion 07-0469 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0470",
    ruleName: "Quality Criterion 07-0470 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0471",
    ruleName: "Quality Criterion 07-0471 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0472",
    ruleName: "Quality Criterion 07-0472 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0473",
    ruleName: "Quality Criterion 07-0473 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0474",
    ruleName: "Quality Criterion 07-0474 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0475",
    ruleName: "Quality Criterion 07-0475 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0476",
    ruleName: "Quality Criterion 07-0476 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0477",
    ruleName: "Quality Criterion 07-0477 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0478",
    ruleName: "Quality Criterion 07-0478 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0479",
    ruleName: "Quality Criterion 07-0479 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0480",
    ruleName: "Quality Criterion 07-0480 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0481",
    ruleName: "Quality Criterion 07-0481 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0482",
    ruleName: "Quality Criterion 07-0482 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0483",
    ruleName: "Quality Criterion 07-0483 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0484",
    ruleName: "Quality Criterion 07-0484 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0485",
    ruleName: "Quality Criterion 07-0485 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0486",
    ruleName: "Quality Criterion 07-0486 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0487",
    ruleName: "Quality Criterion 07-0487 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0488",
    ruleName: "Quality Criterion 07-0488 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0489",
    ruleName: "Quality Criterion 07-0489 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0490",
    ruleName: "Quality Criterion 07-0490 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0491",
    ruleName: "Quality Criterion 07-0491 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0492",
    ruleName: "Quality Criterion 07-0492 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0493",
    ruleName: "Quality Criterion 07-0493 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0494",
    ruleName: "Quality Criterion 07-0494 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0495",
    ruleName: "Quality Criterion 07-0495 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0496",
    ruleName: "Quality Criterion 07-0496 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0497",
    ruleName: "Quality Criterion 07-0497 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0498",
    ruleName: "Quality Criterion 07-0498 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0499",
    ruleName: "Quality Criterion 07-0499 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0500",
    ruleName: "Quality Criterion 07-0500 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0501",
    ruleName: "Quality Criterion 07-0501 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0502",
    ruleName: "Quality Criterion 07-0502 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0503",
    ruleName: "Quality Criterion 07-0503 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0504",
    ruleName: "Quality Criterion 07-0504 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0505",
    ruleName: "Quality Criterion 07-0505 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0506",
    ruleName: "Quality Criterion 07-0506 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0507",
    ruleName: "Quality Criterion 07-0507 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0508",
    ruleName: "Quality Criterion 07-0508 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0509",
    ruleName: "Quality Criterion 07-0509 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0510",
    ruleName: "Quality Criterion 07-0510 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0511",
    ruleName: "Quality Criterion 07-0511 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0512",
    ruleName: "Quality Criterion 07-0512 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0513",
    ruleName: "Quality Criterion 07-0513 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0514",
    ruleName: "Quality Criterion 07-0514 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0515",
    ruleName: "Quality Criterion 07-0515 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0516",
    ruleName: "Quality Criterion 07-0516 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0517",
    ruleName: "Quality Criterion 07-0517 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0518",
    ruleName: "Quality Criterion 07-0518 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0519",
    ruleName: "Quality Criterion 07-0519 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0520",
    ruleName: "Quality Criterion 07-0520 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0521",
    ruleName: "Quality Criterion 07-0521 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0522",
    ruleName: "Quality Criterion 07-0522 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0523",
    ruleName: "Quality Criterion 07-0523 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0524",
    ruleName: "Quality Criterion 07-0524 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0525",
    ruleName: "Quality Criterion 07-0525 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0526",
    ruleName: "Quality Criterion 07-0526 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0527",
    ruleName: "Quality Criterion 07-0527 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0528",
    ruleName: "Quality Criterion 07-0528 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0529",
    ruleName: "Quality Criterion 07-0529 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0530",
    ruleName: "Quality Criterion 07-0530 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0531",
    ruleName: "Quality Criterion 07-0531 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0532",
    ruleName: "Quality Criterion 07-0532 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0533",
    ruleName: "Quality Criterion 07-0533 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0534",
    ruleName: "Quality Criterion 07-0534 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0535",
    ruleName: "Quality Criterion 07-0535 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0536",
    ruleName: "Quality Criterion 07-0536 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0537",
    ruleName: "Quality Criterion 07-0537 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0538",
    ruleName: "Quality Criterion 07-0538 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0539",
    ruleName: "Quality Criterion 07-0539 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0540",
    ruleName: "Quality Criterion 07-0540 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0541",
    ruleName: "Quality Criterion 07-0541 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0542",
    ruleName: "Quality Criterion 07-0542 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0543",
    ruleName: "Quality Criterion 07-0543 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0544",
    ruleName: "Quality Criterion 07-0544 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0545",
    ruleName: "Quality Criterion 07-0545 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0546",
    ruleName: "Quality Criterion 07-0546 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0547",
    ruleName: "Quality Criterion 07-0547 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0548",
    ruleName: "Quality Criterion 07-0548 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0549",
    ruleName: "Quality Criterion 07-0549 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0550",
    ruleName: "Quality Criterion 07-0550 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0551",
    ruleName: "Quality Criterion 07-0551 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0552",
    ruleName: "Quality Criterion 07-0552 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0553",
    ruleName: "Quality Criterion 07-0553 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0554",
    ruleName: "Quality Criterion 07-0554 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0555",
    ruleName: "Quality Criterion 07-0555 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0556",
    ruleName: "Quality Criterion 07-0556 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0557",
    ruleName: "Quality Criterion 07-0557 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0558",
    ruleName: "Quality Criterion 07-0558 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0559",
    ruleName: "Quality Criterion 07-0559 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0560",
    ruleName: "Quality Criterion 07-0560 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0561",
    ruleName: "Quality Criterion 07-0561 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0562",
    ruleName: "Quality Criterion 07-0562 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0563",
    ruleName: "Quality Criterion 07-0563 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0564",
    ruleName: "Quality Criterion 07-0564 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0565",
    ruleName: "Quality Criterion 07-0565 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0566",
    ruleName: "Quality Criterion 07-0566 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0567",
    ruleName: "Quality Criterion 07-0567 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0568",
    ruleName: "Quality Criterion 07-0568 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0569",
    ruleName: "Quality Criterion 07-0569 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0570",
    ruleName: "Quality Criterion 07-0570 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0571",
    ruleName: "Quality Criterion 07-0571 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0572",
    ruleName: "Quality Criterion 07-0572 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0573",
    ruleName: "Quality Criterion 07-0573 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0574",
    ruleName: "Quality Criterion 07-0574 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0575",
    ruleName: "Quality Criterion 07-0575 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0576",
    ruleName: "Quality Criterion 07-0576 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0577",
    ruleName: "Quality Criterion 07-0577 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0578",
    ruleName: "Quality Criterion 07-0578 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0579",
    ruleName: "Quality Criterion 07-0579 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0580",
    ruleName: "Quality Criterion 07-0580 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0581",
    ruleName: "Quality Criterion 07-0581 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0582",
    ruleName: "Quality Criterion 07-0582 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0583",
    ruleName: "Quality Criterion 07-0583 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0584",
    ruleName: "Quality Criterion 07-0584 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0585",
    ruleName: "Quality Criterion 07-0585 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0586",
    ruleName: "Quality Criterion 07-0586 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0587",
    ruleName: "Quality Criterion 07-0587 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0588",
    ruleName: "Quality Criterion 07-0588 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0589",
    ruleName: "Quality Criterion 07-0589 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0590",
    ruleName: "Quality Criterion 07-0590 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0591",
    ruleName: "Quality Criterion 07-0591 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0592",
    ruleName: "Quality Criterion 07-0592 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0593",
    ruleName: "Quality Criterion 07-0593 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0594",
    ruleName: "Quality Criterion 07-0594 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0595",
    ruleName: "Quality Criterion 07-0595 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0596",
    ruleName: "Quality Criterion 07-0596 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0597",
    ruleName: "Quality Criterion 07-0597 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0598",
    ruleName: "Quality Criterion 07-0598 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0599",
    ruleName: "Quality Criterion 07-0599 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0600",
    ruleName: "Quality Criterion 07-0600 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0601",
    ruleName: "Quality Criterion 07-0601 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0602",
    ruleName: "Quality Criterion 07-0602 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0603",
    ruleName: "Quality Criterion 07-0603 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0604",
    ruleName: "Quality Criterion 07-0604 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0605",
    ruleName: "Quality Criterion 07-0605 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0606",
    ruleName: "Quality Criterion 07-0606 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0607",
    ruleName: "Quality Criterion 07-0607 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0608",
    ruleName: "Quality Criterion 07-0608 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0609",
    ruleName: "Quality Criterion 07-0609 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0610",
    ruleName: "Quality Criterion 07-0610 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0611",
    ruleName: "Quality Criterion 07-0611 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0612",
    ruleName: "Quality Criterion 07-0612 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0613",
    ruleName: "Quality Criterion 07-0613 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0614",
    ruleName: "Quality Criterion 07-0614 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0615",
    ruleName: "Quality Criterion 07-0615 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0616",
    ruleName: "Quality Criterion 07-0616 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0617",
    ruleName: "Quality Criterion 07-0617 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0618",
    ruleName: "Quality Criterion 07-0618 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0619",
    ruleName: "Quality Criterion 07-0619 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0620",
    ruleName: "Quality Criterion 07-0620 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0621",
    ruleName: "Quality Criterion 07-0621 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0622",
    ruleName: "Quality Criterion 07-0622 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0623",
    ruleName: "Quality Criterion 07-0623 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0624",
    ruleName: "Quality Criterion 07-0624 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0625",
    ruleName: "Quality Criterion 07-0625 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0626",
    ruleName: "Quality Criterion 07-0626 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0627",
    ruleName: "Quality Criterion 07-0627 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0628",
    ruleName: "Quality Criterion 07-0628 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0629",
    ruleName: "Quality Criterion 07-0629 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0630",
    ruleName: "Quality Criterion 07-0630 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0631",
    ruleName: "Quality Criterion 07-0631 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0632",
    ruleName: "Quality Criterion 07-0632 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0633",
    ruleName: "Quality Criterion 07-0633 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0634",
    ruleName: "Quality Criterion 07-0634 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0635",
    ruleName: "Quality Criterion 07-0635 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0636",
    ruleName: "Quality Criterion 07-0636 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0637",
    ruleName: "Quality Criterion 07-0637 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0638",
    ruleName: "Quality Criterion 07-0638 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0639",
    ruleName: "Quality Criterion 07-0639 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0640",
    ruleName: "Quality Criterion 07-0640 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0641",
    ruleName: "Quality Criterion 07-0641 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0642",
    ruleName: "Quality Criterion 07-0642 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0643",
    ruleName: "Quality Criterion 07-0643 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0644",
    ruleName: "Quality Criterion 07-0644 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0645",
    ruleName: "Quality Criterion 07-0645 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0646",
    ruleName: "Quality Criterion 07-0646 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0647",
    ruleName: "Quality Criterion 07-0647 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0648",
    ruleName: "Quality Criterion 07-0648 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0649",
    ruleName: "Quality Criterion 07-0649 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0650",
    ruleName: "Quality Criterion 07-0650 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0651",
    ruleName: "Quality Criterion 07-0651 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0652",
    ruleName: "Quality Criterion 07-0652 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0653",
    ruleName: "Quality Criterion 07-0653 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0654",
    ruleName: "Quality Criterion 07-0654 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0655",
    ruleName: "Quality Criterion 07-0655 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0656",
    ruleName: "Quality Criterion 07-0656 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0657",
    ruleName: "Quality Criterion 07-0657 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0658",
    ruleName: "Quality Criterion 07-0658 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0659",
    ruleName: "Quality Criterion 07-0659 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0660",
    ruleName: "Quality Criterion 07-0660 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0661",
    ruleName: "Quality Criterion 07-0661 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0662",
    ruleName: "Quality Criterion 07-0662 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0663",
    ruleName: "Quality Criterion 07-0663 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0664",
    ruleName: "Quality Criterion 07-0664 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0665",
    ruleName: "Quality Criterion 07-0665 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0666",
    ruleName: "Quality Criterion 07-0666 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0667",
    ruleName: "Quality Criterion 07-0667 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0668",
    ruleName: "Quality Criterion 07-0668 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0669",
    ruleName: "Quality Criterion 07-0669 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0670",
    ruleName: "Quality Criterion 07-0670 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0671",
    ruleName: "Quality Criterion 07-0671 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0672",
    ruleName: "Quality Criterion 07-0672 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0673",
    ruleName: "Quality Criterion 07-0673 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0674",
    ruleName: "Quality Criterion 07-0674 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0675",
    ruleName: "Quality Criterion 07-0675 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0676",
    ruleName: "Quality Criterion 07-0676 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0677",
    ruleName: "Quality Criterion 07-0677 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0678",
    ruleName: "Quality Criterion 07-0678 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0679",
    ruleName: "Quality Criterion 07-0679 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0680",
    ruleName: "Quality Criterion 07-0680 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0681",
    ruleName: "Quality Criterion 07-0681 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0682",
    ruleName: "Quality Criterion 07-0682 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0683",
    ruleName: "Quality Criterion 07-0683 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0684",
    ruleName: "Quality Criterion 07-0684 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0685",
    ruleName: "Quality Criterion 07-0685 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0686",
    ruleName: "Quality Criterion 07-0686 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0687",
    ruleName: "Quality Criterion 07-0687 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0688",
    ruleName: "Quality Criterion 07-0688 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0689",
    ruleName: "Quality Criterion 07-0689 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0690",
    ruleName: "Quality Criterion 07-0690 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0691",
    ruleName: "Quality Criterion 07-0691 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0692",
    ruleName: "Quality Criterion 07-0692 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0693",
    ruleName: "Quality Criterion 07-0693 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0694",
    ruleName: "Quality Criterion 07-0694 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0695",
    ruleName: "Quality Criterion 07-0695 for constraints",
    targetSection: "constraints",
    weight: 6,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0696",
    ruleName: "Quality Criterion 07-0696 for goal",
    targetSection: "goal",
    weight: 7,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0697",
    ruleName: "Quality Criterion 07-0697 for audience",
    targetSection: "audience",
    weight: 8,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0698",
    ruleName: "Quality Criterion 07-0698 for design",
    targetSection: "design",
    weight: 9,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0699",
    ruleName: "Quality Criterion 07-0699 for features",
    targetSection: "features",
    weight: 10,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0700",
    ruleName: "Quality Criterion 07-0700 for content",
    targetSection: "content",
    weight: 1,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0701",
    ruleName: "Quality Criterion 07-0701 for ux",
    targetSection: "ux",
    weight: 2,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0702",
    ruleName: "Quality Criterion 07-0702 for technical",
    targetSection: "technical",
    weight: 3,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0703",
    ruleName: "Quality Criterion 07-0703 for constraints",
    targetSection: "constraints",
    weight: 4,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0704",
    ruleName: "Quality Criterion 07-0704 for goal",
    targetSection: "goal",
    weight: 5,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0705",
    ruleName: "Quality Criterion 07-0705 for audience",
    targetSection: "audience",
    weight: 6,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0706",
    ruleName: "Quality Criterion 07-0706 for design",
    targetSection: "design",
    weight: 7,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0707",
    ruleName: "Quality Criterion 07-0707 for features",
    targetSection: "features",
    weight: 8,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0708",
    ruleName: "Quality Criterion 07-0708 for content",
    targetSection: "content",
    weight: 9,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0709",
    ruleName: "Quality Criterion 07-0709 for ux",
    targetSection: "ux",
    weight: 10,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0710",
    ruleName: "Quality Criterion 07-0710 for technical",
    targetSection: "technical",
    weight: 1,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0711",
    ruleName: "Quality Criterion 07-0711 for constraints",
    targetSection: "constraints",
    weight: 2,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0712",
    ruleName: "Quality Criterion 07-0712 for goal",
    targetSection: "goal",
    weight: 3,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0713",
    ruleName: "Quality Criterion 07-0713 for audience",
    targetSection: "audience",
    weight: 4,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0714",
    ruleName: "Quality Criterion 07-0714 for design",
    targetSection: "design",
    weight: 5,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0715",
    ruleName: "Quality Criterion 07-0715 for features",
    targetSection: "features",
    weight: 6,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0716",
    ruleName: "Quality Criterion 07-0716 for content",
    targetSection: "content",
    weight: 7,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0717",
    ruleName: "Quality Criterion 07-0717 for ux",
    targetSection: "ux",
    weight: 8,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0718",
    ruleName: "Quality Criterion 07-0718 for technical",
    targetSection: "technical",
    weight: 9,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0719",
    ruleName: "Quality Criterion 07-0719 for constraints",
    targetSection: "constraints",
    weight: 10,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0720",
    ruleName: "Quality Criterion 07-0720 for goal",
    targetSection: "goal",
    weight: 1,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0721",
    ruleName: "Quality Criterion 07-0721 for audience",
    targetSection: "audience",
    weight: 2,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0722",
    ruleName: "Quality Criterion 07-0722 for design",
    targetSection: "design",
    weight: 3,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0723",
    ruleName: "Quality Criterion 07-0723 for features",
    targetSection: "features",
    weight: 4,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0724",
    ruleName: "Quality Criterion 07-0724 for content",
    targetSection: "content",
    weight: 5,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0725",
    ruleName: "Quality Criterion 07-0725 for ux",
    targetSection: "ux",
    weight: 6,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0726",
    ruleName: "Quality Criterion 07-0726 for technical",
    targetSection: "technical",
    weight: 7,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0727",
    ruleName: "Quality Criterion 07-0727 for constraints",
    targetSection: "constraints",
    weight: 8,
    description: "Evaluates completeness and specificity of constraints specification in rule set 07.",
    validationKeywords: [
      "keyword_constraints_1",
      "keyword_constraints_2",
      "keyword_constraints_3"
    ],
    remediationGuidance: "Add explicit detail for constraints section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0728",
    ruleName: "Quality Criterion 07-0728 for goal",
    targetSection: "goal",
    weight: 9,
    description: "Evaluates completeness and specificity of goal specification in rule set 07.",
    validationKeywords: [
      "keyword_goal_1",
      "keyword_goal_2",
      "keyword_goal_3"
    ],
    remediationGuidance: "Add explicit detail for goal section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0729",
    ruleName: "Quality Criterion 07-0729 for audience",
    targetSection: "audience",
    weight: 10,
    description: "Evaluates completeness and specificity of audience specification in rule set 07.",
    validationKeywords: [
      "keyword_audience_1",
      "keyword_audience_2",
      "keyword_audience_3"
    ],
    remediationGuidance: "Add explicit detail for audience section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0730",
    ruleName: "Quality Criterion 07-0730 for design",
    targetSection: "design",
    weight: 1,
    description: "Evaluates completeness and specificity of design specification in rule set 07.",
    validationKeywords: [
      "keyword_design_1",
      "keyword_design_2",
      "keyword_design_3"
    ],
    remediationGuidance: "Add explicit detail for design section to improve prompt quality score.",
    severity: "high"
  },
  {
    id: "rule-07-0731",
    ruleName: "Quality Criterion 07-0731 for features",
    targetSection: "features",
    weight: 2,
    description: "Evaluates completeness and specificity of features specification in rule set 07.",
    validationKeywords: [
      "keyword_features_1",
      "keyword_features_2",
      "keyword_features_3"
    ],
    remediationGuidance: "Add explicit detail for features section to improve prompt quality score.",
    severity: "critical"
  },
  {
    id: "rule-07-0732",
    ruleName: "Quality Criterion 07-0732 for content",
    targetSection: "content",
    weight: 3,
    description: "Evaluates completeness and specificity of content specification in rule set 07.",
    validationKeywords: [
      "keyword_content_1",
      "keyword_content_2",
      "keyword_content_3"
    ],
    remediationGuidance: "Add explicit detail for content section to improve prompt quality score.",
    severity: "low"
  },
  {
    id: "rule-07-0733",
    ruleName: "Quality Criterion 07-0733 for ux",
    targetSection: "ux",
    weight: 4,
    description: "Evaluates completeness and specificity of ux specification in rule set 07.",
    validationKeywords: [
      "keyword_ux_1",
      "keyword_ux_2",
      "keyword_ux_3"
    ],
    remediationGuidance: "Add explicit detail for ux section to improve prompt quality score.",
    severity: "medium"
  },
  {
    id: "rule-07-0734",
    ruleName: "Quality Criterion 07-0734 for technical",
    targetSection: "technical",
    weight: 5,
    description: "Evaluates completeness and specificity of technical specification in rule set 07.",
    validationKeywords: [
      "keyword_technical_1",
      "keyword_technical_2",
      "keyword_technical_3"
    ],
    remediationGuidance: "Add explicit detail for technical section to improve prompt quality score.",
    severity: "high"
  },
];

export function evaluateRules07(section: SectionKey): QualityRule07[] {
  return QUALITY_RULES_07.filter(r => r.targetSection === section);
}

export function calculateTotalWeight07(): number {
  return QUALITY_RULES_07.reduce((sum, r) => sum + r.weight, 0);
}


// PR #055 Enhancement: feat(engine): Formulate technical constraints strictness checker and penalty weights

// PR #065 Enhancement: feat(engine): Formulate API endpoint contract completeness scoring rules

// PR #075 Enhancement: feat(engine): Formulate refactoring directive and code review quality rules

// Live GitHub PR #055 [1789471993.9699585]: feat(engine): Formulate technical constraints strictness checker and penalty weights

// Live GitHub PR #065 [1789472104.2866879]: feat(engine): Formulate API endpoint contract completeness scoring rules
