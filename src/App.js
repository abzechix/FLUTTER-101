import React, { useState, useEffect } from 'react';
import './index.css';
import Introduction from './Introduction';
import CourseLayout from './CourseLayout';
import Sidebar from './Sidebar';
import Content from './Content';
import Congratulations from './Congratulations';

const courseContent = [
  {
    title: "Section 1: Dart Foundations – Your Coding Superpowers Begin Here! 🛠️",
    content: [
      {
        subtitle: "Introduction",
        content: [
          {
            type: "text",
            data: "Before we jump into Flutter’s magical world of widgets, we need to master Dart—the programming language that powers Flutter. Think of Dart as the engine under the hood of your soon-to-be-awesome apps. This section is all about getting comfy with Dart’s basics, with hands-on exercises to solidify your skills."
          }
        ]
      },
      {
        subtitle: "Why Dart?",
        content: [
          {
            type: "text",
            data: "Dart is modern, clean, and beginner-friendly. It’s object-oriented (everything’s an object!), supports asynchronous programming (great for smooth apps), and compiles to native code for fast performance. Plus, it’s the key to unlocking Flutter’s potential!"
          }
        ]
      },
      {
        subtitle: "Core Dart Concepts",
        content: [
         {
            type: "checklist",
            data: [
              "Variables: Store data like numbers, text, or true/false values.",
              "var: Let Dart guess the type (e.g., var age = 25; becomes an integer).",
              "final: Set it once, and it’s locked (e.g., final name = 'Alice';).",
              "const: A compile-time constant (e.g., const pi = 3.14;).",
              "Data Types: Numbers (int, double), strings (String), booleans (bool), lists (List), and maps (Map).",
              "Functions: Reusable blocks of code.",
              "Simple: void sayHello(String name) { print('Hello, $name!'); }",
              "With return: int add(int a, int b) { return a + b; }",
              "Async: Future<void> waitAndPrint() async { await Future.delayed(Duration(seconds: 2)); print('Done!'); }",
              "Classes: Blueprints for objects."
            ]
          },
          {
            type: "code",
            data:
`class Person {
  String name;
  int age;
  Person(this.name, this.age); // Constructor
  void introduce() {
    print('Hi, I’m $name, and I’m $age years old!');
  }
}`,
            language: "dart"
          },
          {
            type: "text",
            data: "Control Flow: Make decisions with if, else, loops (for, while), and switch."
          }
        ]
      },
      {
        subtitle: "Hands-On Exercises",
        content: [
          {
            type: "text",
            data: "Let’s get coding! Open your IDE (VS Code or Android Studio), create a new Dart file (e.g., dart_intro.dart), and try these:"
          },
          {
            type: "text",
            data: "Variable Playtime: Declare variables for your name, age, and whether you’re a student. Print them in a sentence."
          },
          {
            type: "code",
            data:
`void main() {
  var name = 'Alex';
  final age = 20;
  bool isStudent = true;
  print('I’m $name, $age years old, and am I a student? $isStudent!');
}`,
            language: "dart"
          },
          {
            type: "text",
            data: "Function Fun: Write a function that takes two numbers and returns their sum. Call it in main()."
          },
          {
            type: "code",
            data:
`int add(int a, int b) {
  return a + b;
}
void main() {
  print('5 + 3 = ');
   print(add(5, 3));
}`,
            language: "dart"
          },
          {
            type: "text",
            data: "Classroom Challenge: Create a Dog class with name and breed properties and a bark() method that prints “Woof!”. Make a dog and let it bark!"
          },
          {
            type: "code",
            isSolution: true,
            data:
`class Dog {
  String name;
  String breed;
  Dog(this.name, this.breed);
  void bark() {
    print('$name says: Woof!');
  }
}
void main() {
  var myDog = Dog('Buddy', 'Golden Retriever');
  myDog.bark();
}`,
            language: "dart"
          },
          {
            type: "text",
            data: "Async Adventure: Write an async function that waits 3 seconds, then prints “Time’s up!”."
          },
          {
            type: "code",
            isSolution: true,
            data:
`Future<void> timer() async {
  await Future.delayed(Duration(seconds: 3));
  print('Time’s up!');
}
void main() {
  timer();
  print('Waiting...');
}`,
            language: "dart"
          }
        ]
      },
      {
        subtitle: "Tips for Efficiency",
        content: [
          {
            type: "tip",
            data: [
              "Practice Daily: Spend 15-30 minutes coding small Dart snippets. Repetition builds muscle memory!",
              "DartPad: Try quick ideas at dartpad.dev – it’s free and no setup needed.",
              "AI Boost: Use tools like GitHub Copilot or ChatGPT to suggest code completions."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Section 2: Flutter Kickoff – Building Your First App 🎨",
    content: [
      {
        subtitle: "Setting Up Flutter",
        content: [
          {
            type: "checklist",
            data: [
              "Install Flutter SDK: Follow the official guide (free!).",
              "Pick an IDE: VS Code or Android Studio—both work great. Install the Flutter and Dart plugins.",
              "Run flutter doctor: Open a terminal, type flutter doctor, and fix any issues it flags.",
              "Create a Project: Run flutter create my_first_app, then cd my_first_app and flutter run to see the default app!"
            ]
          }
        ]
      },
      {
        subtitle: "Everything is a Widget",
        content: [
          {
            type: "text",
            data: "In Flutter, everything is a widget—buttons, text, layouts, even the app itself. Widgets are like LEGO bricks: stack them to build anything!"
          },
          {
            type: "list",
            data: [
              "Stateless Widgets: For static content (e.g., a title).",
              "Stateful Widgets: For dynamic content (e.g., a counter that updates)."
            ]
          }
        ]
      },
      {
        subtitle: "Hands-On: Your First Flutter UI",
        content: [
          {
            type: "text",
            data: "Create a simple app with a title, text, and button. Replace lib/main.dart with this:"
          },
          {
            type: "code",
            data:
`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('My First App')),
        body: Container(
          padding: EdgeInsets.all(16.0),
          child: Column(
            children: [
              Text('Welcome to Flutter!', style: TextStyle(fontSize: 24.0)),
              SizedBox(height: 20.0), // Spacer
              ElevatedButton(
                onPressed: () {
                  print('Button pressed!');
                },
                child: Text('Press Me'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,
            language: "dart"
          }
        ]
      },
      {
        subtitle: "Tips for Efficiency",
        content: [
          {
            type: "tip",
            data: [
              "Hot Reload: Change code and hit “Save”—Flutter updates your app instantly. Magic!",
              "Flutter Pub: Find packages at pub.dev (free!).",
              "AI Help: Ask AI, “How do I center a widget in Flutter?” for quick solutions."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Section 3: State Management – Making Your App Dynamic ⚡",
    content: [
      {
        subtitle: "Understanding State",
        content: [
          {
            type: "list",
            data: [
              "Stateless: Fixed UI (e.g., a static title).",
              "Stateful: UI that changes (e.g., a counter). Use setState() to update it."
            ]
          }
        ]
      },
      {
        subtitle: "Hands-On: Counter App with setState",
        content: [
          {
            type: "code",
            data:
`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: CounterScreen());
  }
}

class CounterScreen extends StatefulWidget {
  @override
  _CounterScreenState createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter App')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Counter Value:', style: TextStyle(fontSize: 20.0)),
            Text('\$counter', style: TextStyle(fontSize: 48.0, fontWeight: FontWeight.bold)),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  counter++;
                });
              },
              child: Text('Increment'),
            ),
          ],
        ),
      ),
    );
  }
}`,
            language: "dart"
          }
        ]
      },
      {
        subtitle: "Intro to Riverpod",
        content: [
          {
            type: "text",
            data: "setState is great for small apps, but for bigger ones, Riverpod shines. It’s a state management library that’s simple yet powerful. Add it to pubspec.yaml:"
          },
          {
            type: "code",
            data:
`dependencies:
  flutter_riverpod: ^2.0.0`,
            language: "yaml"
          },
          {
            type: "text",
            data: "Run flutter pub get."
          }
        ]
      },
      {
        subtitle: "Hands-On: Counter App with Riverpod",
        content: [
          {
            type: "code",
            data:
`import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  runApp(ProviderScope(child: MyApp()));
}

final counterProvider = StateProvider<int>((ref) => 0);

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: CounterScreen());
  }
}

class CounterScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final counter = ref.watch(counterProvider);
    return Scaffold(
      appBar: AppBar(title: Text('Riverpod Counter')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Counter Value:', style: TextStyle(fontSize: 20.0)),
            Text('\$counter', style: TextStyle(fontSize: 48.0, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          ref.read(counterProvider.notifier).state++;
        },
        child: Icon(Icons.add),
      ),
    );
  }
}`,
            language: "dart"
          }
        ]
      },
      {
        subtitle: "Tips for Efficiency",
        content: [
          {
            type: "tip",
            data: [
              "Break It Down: Start small (e.g., counters), then add features (e.g., decrement).",
              "Riverpod Docs: Check riverpod.dev for free tutorials.",
              "AI Leverage: Ask, “Convert this setState code to Riverpod” to speed up learning."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Section 4: Final Project – Task Tracker App 🗒️",
    content: [
      {
        subtitle: "Step 1: Task Model",
        content: [
          {
            type: "code",
            data:
`class Task {
  final String title;
  final bool isCompleted;
  Task(this.title, {this.isCompleted = false});
}`,
            language: "dart"
          }
        ]
      },
      {
        subtitle: "Step 2: State Management with Riverpod",
        content: [
          {
            type: "code",
            data:
`import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'task.dart';

void main() {
  runApp(ProviderScope(child: MyApp()));
}

final taskProvider = StateNotifierProvider<TaskNotifier, List<Task>>((ref) => TaskNotifier());

class TaskNotifier extends StateNotifier<List<Task>> {
  TaskNotifier() : super([]);
  void add(String title) => state = [...state, Task(title)];
  void toggle(int index) {
    state = [
      for (int i = 0; i < state.length; i++)
        i == index ? Task(state[i].title, isCompleted: !state[i].isCompleted) : state[i],
    ];
  }
  void delete(int index) => state = state.where((_, i) => i != index).toList();
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: TaskScreen());
  }
}

class TaskScreen extends ConsumerWidget {
  final _controller = TextEditingController();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final tasks = ref.watch(taskProvider);
    return Scaffold(
      appBar: AppBar(title: Text('Task Tracker')),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(16.0),
            child: TextField(
              controller: _controller,
              decoration: InputDecoration(
                labelText: 'Add Task',
                border: OutlineInputBorder(),
              ),
              onSubmitted: (value) {
                if (value.isNotEmpty) {
                  ref.read(taskProvider.notifier).add(value);
                  _controller.clear();
                }
              },
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: tasks.length,
              itemBuilder: (context, index) {
                final task = tasks[index];
                return ListTile(
                  title: Text(
                    task.title,
                    style: TextStyle(
                      decoration: task.isCompleted ? TextDecoration.lineThrough : null,
                    ),
                  ),
                  leading: Checkbox(
                    value: task.isCompleted,
                    onChanged: (_) => ref.read(taskProvider.notifier).toggle(index),
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.delete),
                    onPressed: () => ref.read(taskProvider.notifier).delete(index),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}`,
            language: "dart"
          }
        ]
      },
      {
        subtitle: "Step 3: Run & Enhance",
        content: [
          {
            type: "text",
            data: "Run it with flutter run. Add tasks, toggle them, delete them—boom, you’ve got a working app! Enhance it by:"
          },
          {
            type: "list",
            data: [
              "Adding a “Clear All” button.",
              "Styling with colors or icons from pub.dev/packages/icons."
            ]
          }
        ]
      },
      {
        subtitle: "Tips for Efficiency",
        content: [
          {
            type: "tip",
            data: [
              "Test Often: Use an emulator or phone to see changes live.",
              "Flutter Community: Join Flutter’s Discord (free!) for help and inspo.",
              "AI Magic: Ask, “Add a feature to sort tasks alphabetically” to level up fast."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Final Wrap-Up: You’re a Flutter Dev Now! 🎉",
    content: [
      {
        subtitle: "Recap & Next Steps",
        content: [
          {
            type: "list",
            data: [
              "Dart: Variables, functions, classes, async—your coding foundation.",
              "Flutter: Widgets, state, Riverpod—your app-building toolkit.",
              "Project: A Task Tracker you can show off!"
            ]
          },
          {
            type: "text",
            data: "Explore Flutter’s official docs (free!). Build another app: a weather app, calculator, or game. Share your work on X or GitHub—get feedback and keep growing!"
          },
          {
            type: "text",
            data: "Keep coding, stay curious, and have fun—you’ve got this! 🚀"
          }
        ]
      }
    ]
  }
];


function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState({
    seen: [],
    finished: [],
    flagged: [],
    currentSection: 0,
  });
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setProgress(parsed);
      setIsStarted(true);
    }
  }, []);

  useEffect(() => {
    if (isStarted) {
      localStorage.setItem('progress', JSON.stringify(progress));
    }
  }, [progress, isStarted]);

  const startCourse = () => {
    setIsStarted(true);
    if (progress.currentSection === undefined) {
      setProgress({ ...progress, currentSection: 0 });
    }
  };

  const handleSectionClick = (sectionIndex) => {
    setProgress((prev) => ({
      ...prev,
      currentSection: sectionIndex,
      seen: prev.seen.includes(sectionIndex) ? prev.seen : [...prev.seen, sectionIndex],
    }));
  };

  const handleMarkFinished = (sectionIndex) => {
    setProgress(prev => ({
      ...prev,
      finished: [...prev.finished, sectionIndex],
    }));
  };
  
  const handleRestart = (sectionIndex) => {
    setProgress(prev => ({
      ...prev,
      finished: prev.finished.filter(i => i !== sectionIndex),
    }));
  };
  
  const handleFlag = (sectionIndex) => {
    setProgress(prev => ({
      ...prev,
      flagged: prev.flagged.includes(sectionIndex)
        ? prev.flagged.filter(i => i !== sectionIndex)
        : [...prev.flagged, sectionIndex],
    }));
  };
  
  const handleUnflag = (sectionIndex) => {
    setProgress(prev => ({
      ...prev,
      flagged: prev.flagged.filter(i => i !== sectionIndex),
    }));
  };


  const handleValidate = () => {
    const nextSection = progress.currentSection + 1;
    if (nextSection < courseContent.length) {
      setProgress(prev => ({
        ...prev,
        finished: [...prev.finished, prev.currentSection],
        currentSection: nextSection,
        seen: prev.seen.includes(nextSection) ? prev.seen : [...prev.seen, nextSection],
      }));
    } else {
      setProgress(prev => ({
        ...prev,
        finished: [...prev.finished, prev.currentSection],
      }));
      setShowCongratulations(true);
    }
  };

  const scrollToSubtitle = (sectionIndex, subtitleIndex) => {
    const element = document.getElementById(`section-${sectionIndex}-subtitle-${subtitleIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      // Ensure progress matches current course structure
      setProgress({
        ...parsed,
        seen: parsed.seen.filter(i => i < courseContent.length),
        finished: parsed.finished.filter(i => i < courseContent.length),
        flagged: parsed.flagged.filter(i => i < courseContent.length),
      });
    } else {
      setProgress({
        seen: [],
        finished: [],
        flagged: [],
        currentSection: 0,
        totalSections: courseContent.length // Add this for reference
      });
    }
  }, []);
  
  // Completion check
  const isFinished = progress.finished.length === courseContent.length;

  //const isFinished = courseContent.every((_, index) => progress.finished.includes(index));

  if (!isStarted) {
    return <Introduction onStart={startCourse} />;
  } else {
    return (
      <CourseLayout>
      {showCongratulations && <Congratulations onClose={() => setShowCongratulations(false)} />}
      <Sidebar
        sections={courseContent}
        progress={progress}
        onSectionClick={handleSectionClick}
        onSubtitleClick={scrollToSubtitle}
        onMarkFinished={handleMarkFinished}
        onRestart={handleRestart}
        onFlag={handleFlag}
        onUnflag={handleUnflag}
      />
      <Content
        section={courseContent[progress.currentSection]}
        sectionIndex={progress.currentSection}
        onFlag={handleFlag}
        onValidate={handleValidate}
        isFlagged={progress.flagged.includes(progress.currentSection)}
        isFinished={progress.finished.includes(progress.currentSection)}
      />
    </CourseLayout>
    );
  }
}

export default App;