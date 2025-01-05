import React from 'react';

const achievementsList = [
  {
    metric: 'Projects',
    value: '100+',
  },
  {
    metric: 'Users',
    value: '50+',
  },
  {
    metric: 'Awards',
    value: '10+',
  },
  {
    metric: 'Years',
    value: '5+',
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 text-center"
            >
              <h2 className="text-4xl font-bold text-white">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
