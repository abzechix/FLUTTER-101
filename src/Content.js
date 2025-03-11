import React, { useState } from 'react';
import styled from 'styled-components';
import NeonButton from './NeonButton';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ContentContainer = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  line-height: 1.6;

  h1 { font-size: 2.5rem; margin-bottom: 2rem; color: #c092d5; }
  h2 { font-size: 1.8rem; margin: 1.5rem 0; color: #ffde59; }
  p { margin: 1rem 0; font-size: 1.1rem; }
  ul { margin: 1rem 0; padding-left: 2rem; }
  li { margin: 0.5rem 0; }
`;

const CodeBlockWrapper = styled.div`
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const TipContainer = styled.div`
  background-color: rgba(192, 146, 213, 0.1); // Soft #c092d5
  border-left: 4px solid #c092d5;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
`;

const SolutionComponent = ({ code, language }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <NeonButton onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide Solution' : 'Show Solution'}
      </NeonButton>
      {isShown && (
        <CodeBlockWrapper>
          <SyntaxHighlighter language={language} style={vscDarkPlus}>
            {code}
          </SyntaxHighlighter>
        </CodeBlockWrapper>
      )}
    </div>
  );
};

const ChecklistComponent = ({ items }) => {
  const [checked, setChecked] = useState(items.map(() => false));
  const handleCheck = (index) => {
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => handleCheck(index)}
          />
          <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </li>
      ))}
    </ul>
  );
};

const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'text':
          // Add safety check for string type
          const textContent = typeof item.data === 'string' ? item.data : '';
          return <p key={index} dangerouslySetInnerHTML={{ __html: textContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
  
        case 'code':
          if (item.isSolution) {
            return <SolutionComponent key={index} code={item.data} language={item.language} />;
          }
          return (
            <CodeBlockWrapper key={index}>
              <SyntaxHighlighter language={item.language} style={vscDarkPlus}>
                {item.data}
              </SyntaxHighlighter>
            </CodeBlockWrapper>
          );
  
        case 'list':
          return (
            <ul key={index}>
              {item.data.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ 
                  __html: typeof point === 'string' 
                    ? point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    : point 
                }} />
              ))}
            </ul>
          );
  
        case 'checklist':
          return <ChecklistComponent key={index} items={item.data} />;
  
        case 'tip':
          // Handle array of tips
          return (
            <TipContainer key={index}>
              {item.data.map((tip, tipIndex) => (
                <p key={tipIndex} dangerouslySetInnerHTML={{ 
                  __html: typeof tip === 'string' 
                    ? tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    : tip 
                }} />
              ))}
            </TipContainer>
          );
  
        default:
          return null;
      }
    });
  };

function Content({ section, sectionIndex, onFlag, onValidate, isFlagged, isFinished }) {
  return (
    <ContentContainer>
      <h1>{section.title}</h1>
      {section.content.map((item, index) => (
        <div key={index}>
          <h2 id={`section-${sectionIndex}-subtitle-${index}`}>{item.subtitle}</h2>
          {renderContent(item.content)}
        </div>
      ))}
      <ButtonContainer>
        <NeonButton onClick={onFlag} outlined={isFlagged}>
          {isFlagged ? 'Unflag' : 'Flag for Revision'}
        </NeonButton>
        <NeonButton onClick={onValidate} outlined={isFinished}>
          Validate and Next
        </NeonButton>
      </ButtonContainer>
    </ContentContainer>
  );
}

export default Content;