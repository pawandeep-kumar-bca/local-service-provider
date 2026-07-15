import React from "react";
import StatsCard from "../../../../components/common/admin/StatsCard.jsx";
import { getStatsData } from "../data/statsData.jsx";
import { useCategories } from "../../../../hooks/useCategories.js";
const CategoryStatsSection = () => {
  const { data } = useCategories();
  const statsData = getStatsData(data?.stats);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mt-4 mb-6">
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
