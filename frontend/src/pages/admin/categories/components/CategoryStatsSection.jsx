import React from "react";
import StatsCard from "../../../../components/common/admin/StatsCard";
import { statsData } from "../data/statsData.jsx";
const CategoryStatsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2 mt-4 mb-6">
      {statsData.map((item) => (
        <StatsCard
          key={item.id}
          title={item.title}
          value={item.value}
          growth={item.growth}
          icon={item.icon}
          iconBg={item.iconBg}
          iconColor={item.iconColor}
          growthColor={item.growthColor}
          growthIcon={item.growthIcon}
        />
      ))}
    </div>
  );
};

export default CategoryStatsSection;