import React from 'react';

import GitHubLogo from '@/icons/github.svg';
import LeetCodeLogo from '@/icons/leetcode.svg';
import Linkedin from '@/icons/linkedin.svg';

import style from './style.module.scss';

const SocialSection = () => {
  const socialLinks = [
    { icon: LeetCodeLogo, link: 'https://leetcode.com/Georgeb779' },
    { icon: GitHubLogo, link: 'https://github.com/Georgeb779' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/george-baez' },
  ];
  return (
    <div className={style.social_icon__container}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};
export default SocialSection;
