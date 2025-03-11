import React from 'react';
import styled from 'styled-components';
import NeonButton from './NeonButton';

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Highlight = styled.span`
  color: #c092d5;
`;

function Introduction({ onStart }) {
  return (
    <IntroductionContainer>
      <h1>Hands-On Dart & Flutter 101</h1>
      <p>
        Welcome to <Highlight>"Hands-On Dart & Flutter 101: A Beginner’s Guide to App Development"</Highlight>! This course is designed to take you from zero to app-hero, teaching you how to build cross-platform applications using Dart and Flutter. Inspired by hands-on learning approaches, this guide blends practical exercises with foundational theory.
      </p>
      <p>
        <strong>Course Goals:</strong> By the end, you’ll master Dart basics, set up Flutter, build simple UIs, and create your own cross-platform apps confidently.
      </p>
      <p>
        <strong>How You’ll Learn:</strong> Through step-by-step tutorials, real app-building exercises, and interactive content, you’ll gain practical skills with immediate feedback.
      </p>
      <p>
        <strong>Why Flutter?</strong> Launched by Google in 2017, Flutter is a revolutionary UI toolkit that enables fast, beautiful app development across mobile, web, and desktop from a single codebase. Its <Highlight>hot reload</Highlight> feature and growing community make it a top choice for developers worldwide.
      </p>
      <NeonButton onClick={onStart}>Start the Course</NeonButton>
    </IntroductionContainer>
  );
}

export default Introduction;