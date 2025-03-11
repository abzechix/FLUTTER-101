import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FiChevronDown, FiChevronRight, FiCheck, FiFlag, FiBookmark, FiMenu } from 'react-icons/fi';

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #1a1a1a;
  padding: 1.5rem;
  overflow-y: auto;
  border-right: 1px solid #2d2d2d;
`;

const CurrentSectionTitle = styled.div`
  padding: 1rem;
  background-color: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  font-size: 1.2rem;
  font-weight: 600;
  color: #c092d5;
  text-align: center;
  margin-bottom: 1rem;
`;


const SectionHeader = styled.div`
  position: relative; /* Add this to make it the positioning reference */
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.isActive ? '#2a2a2a' : 'transparent'};
  
  &:hover {
    background-color: #2a2a2a;
  }

  ${props => props.isSeen && !props.isFinished && css`
    border-left: 3px solid #c092d5;
  `}

  ${props => props.isFinished && css`
    border-left: 3px solid #ffde59;
  `}

  ${props => props.isFlagged && css`
    border-left: 3px solid #c092d5;
  `}
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-weight: ${props => props.isSeen ? '600' : '400'};
  color: ${props => props.isActive ? '#ffffff' : '#cccccc'};
  font-size: 0.95rem;
  flex-grow: 1;
`;

const IconWrapper = styled.span`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  color: ${props => props.color || '#cccccc'};
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 4px;
  padding: 0.5rem;
  z-index: 10;
  min-width: 150px;
`;

const MenuItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    background-color: #3a3a3a;
  }
`;

const SubtitleList = styled.ul`
  margin: 0;
  padding: 0 0 0 2rem;
  list-style: none;
  max-height: ${props => props.isExpanded ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const SubtitleItem = styled.li`
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  border-radius: 4px;
  font-size: 0.9rem;
  color: ${props => props.isActive ? '#ffffff' : '#999999'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2a2a2a;
    color: #ffffff;
  }

  ${props => props.isActive && css`
    background-color: #2a2a2a;
    font-weight: 500;
  `}
`;

function Sidebar({ sections, progress, onSectionClick, onSubtitleClick, onMarkFinished, onRestart, onFlag, onUnflag }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const getSectionStatusIcon = (sectionIndex) => {
    if (progress.finished.includes(sectionIndex)) {
      return <FiCheck color="#ffde59" />;
    }
    if (progress.flagged.includes(sectionIndex)) {
      return <FiFlag color="#c092d5" />;
    }
    if (progress.seen.includes(sectionIndex)) {
      return <FiBookmark color="#c092d5" />;
    }
    return null;
  };

  return (
    <SidebarContainer>
      <CurrentSectionTitle>
        {sections[progress.currentSection]?.title || 'Select a section'}
      </CurrentSectionTitle>
      {sections.map((section, index) => {
        const isActive = progress.currentSection === index;
        const isExpanded = expandedSection === index;
        const isSeen = progress.seen.includes(index);
        const isFinished = progress.finished.includes(index);
        const isFlagged = progress.flagged.includes(index);

        const menuItems = [];
        if (isFinished) {
          menuItems.push({ label: 'Restart', action: () => onRestart(index) });
        } else {
          menuItems.push({ label: 'Mark as finished', action: () => onMarkFinished(index) });
        }
        if (isFlagged) {
          menuItems.push({ label: 'Unflag', action: () => onUnflag(index) });
        } else {
          menuItems.push({ label: 'Flag for revision', action: () => onFlag(index) });
        }

        return (
          <div key={index}>
            <SectionHeader
              isActive={isActive}
              isSeen={isSeen}
              isFinished={isFinished}
              isFlagged={isFlagged}
              onClick={() => {
                onSectionClick(index);
                setExpandedSection(prev => prev === index ? null : index);
              }}
            >
              <IconWrapper>
                {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
              </IconWrapper>
              <SectionTitle isSeen={isSeen} isActive={isActive}>
                {section.title}
              </SectionTitle>
              <IconWrapper>
                {getSectionStatusIcon(index)}
              </IconWrapper>
              <IconWrapper
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuIndex(prev => prev === index ? null : index);
                }}
              >
                <FiMenu />
              </IconWrapper>
            </SectionHeader>
            {openMenuIndex === index && (
              <MenuContainer>
                {menuItems.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    onClick={() => {
                      item.action();
                      setOpenMenuIndex(null);
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuContainer>
            )}
            <SubtitleList isExpanded={isExpanded}>
              {section.content.map((item, subIndex) => (
                <SubtitleItem
                  key={subIndex}
                  isActive={progress.currentSection === index && window.location.hash === `#section-${index}-subtitle-${subIndex}`}
                  onClick={() => onSubtitleClick(index, subIndex)}
                >
                  {item.subtitle}
                </SubtitleItem>
              ))}
            </SubtitleList>
          </div>
        );
      })}
    </SidebarContainer>
  );
}

export default Sidebar;