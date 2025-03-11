// courseContent.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {value}
    </SyntaxHighlighter>
  );
};

const CourseContent = [
  {
    title: "Section 1: Dart Foundations – Your Coding Superpowers Begin Here! 🛠️",
    content: [
      {
        subtitle: "Why Dart?",
        content: [
          {
            type: 'text',
            data: "Dart is modern, clean, and beginner-friendly. It's object-oriented (everything's an object!), supports asynchronous programming (great for smooth apps), and compiles to native code for fast performance. Plus, it's the key to unlocking Flutter's potential!"
          },
          {
            type: 'code',
            data: "// Example variable declaration\nvar name = 'Alex';\nfinal age = 20;",
            language: 'dart'
          }
        ]
      },
      {
        subtitle: "Core Dart Concepts",
        content: [
          {
            type: 'list',
            data: [
              "**Variables**: `var`, `final`, `const`",
              "**Data Types**: `int`, `double`, `String`, `bool`, `List`, `Map`",
              "**Functions**: Regular and async",
              "**Classes**: Object blueprints with constructors",
              "**Control Flow**: if/else, loops, switch"
            ]
          },
          {
            type: 'code',
            data: "class Dog {\n  String name;\n  Dog(this.name);\n  void bark() => print('Woof!');\n}",
            language: 'dart'
          }
        ]
      },
      // More subtitles...
    ]
  },
  {
    title: "Section 2: Flutter Kickoff – Building Your First App 🎨",
    content: [
      {
        subtitle: "Everything is a Widget",
        content: [
          {
            type: 'text',
            data: "In Flutter, *everything* is a widget - from structural elements to styling. There are two main types:"
          },
          {
            type: 'list',
            data: [
              "**StatelessWidget**: For static content",
              "**StatefulWidget**: For dynamic, changing UI"
            ]
          },
          {
            type: 'code',
            data: "class MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(title: Text('My App'))\n      )\n    );\n  }\n}",
            language: 'dart'
          }
        ]
      }
    ]
  },
  // More sections...
];

export default CourseContent;