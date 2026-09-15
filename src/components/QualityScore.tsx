import React from 'react';
import { QualityScoreData } from '../types/prompt';
import { CheckCircle2, Sliders } from 'lucide-react';

interface QualityScoreProps {
  score: QualityScoreData;
}

export const QualityScore: React.FC<QualityScoreProps> = ({ score }) => {
  const items = [
    { label: 'Goal', value: score.goal },
    { label: 'Audience', value: score.audience },
    { label: 'Features', value: score.features },
    { label: 'Design', value: score.design },
    { label: 'Technical', value: score.technical },
    { label: 'Constraints', value: score.constraints },
  ];

  const getScoreColor = (val: number) => {
    if (val >= 85) return 'bg-[#4F9D78] text-[#4F9D78]';
    if (val >= 70) return 'bg-[#D94F83] text-[#D94F83]';
    return 'bg-[#D99A45] text-[#D99A45]';
  };

  return (
    <div className="bg-white border border-[#EDE3E7] rounded-xl p-5 shadow-2xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#EDE3E7]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#FDF1F5] text-[#D94F83] flex items-center justify-center">
            <Sliders className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#756B72]">
            Structure Completeness
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#29232A] tracking-tight">
            {score.overall}
          </span>
          <span className="text-xs font-medium text-[#756B72]">/ 100</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-[#FDF1F5] h-2 rounded-full overflow-hidden border border-[#EDE3E7]">
        <div
          className="h-full bg-[#D94F83] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${score.overall}%` }}
        />
      </div>

      {/* Breakdown metrics grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
        {items.map((item) => (
          <div
            key={item.label}
            className="p-2.5 rounded-lg bg-[#FBF7F2] border border-[#EDE3E7] space-y-1.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#756B72] font-medium">{item.label}</span>
              <span className="font-semibold text-[#29232A]">{item.value}%</span>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#EDE3E7]">
              <div
                className={`h-full rounded-full ${
                  item.value >= 80 ? 'bg-[#4F9D78]' : 'bg-[#D94F83]'
                }`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 text-[11px] text-[#756B72] pt-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#4F9D78] shrink-0" />
        <span>Calculated via structural rules, word density, and section coverage.</span>
      </div>
    </div>
  );
};
