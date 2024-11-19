import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class PancakeState {
  List<int> stack = [];
  bool isSorted;

  PancakeState(int n, {this.isSorted = false}) {
    stack = List<int>.generate(n, (index) => index + 1);
    stack.shuffle(); // randomly shuffle the pancakes
  }

  // Check if the stack is sorted
  bool checkSorted(List<int> stack) {
    for (int i = 1; i < stack.length; i++) {
      if (stack[i - 1] > stack[i]) return false;
    }
    return true;
  }
}

class PancakeCubit extends Cubit<PancakeState> {
  PancakeCubit(int n) : super(PancakeState(n));

  void update(int n) {
    emit(PancakeState(n)); // update with new number of pancakes
  }

  void randomizeStack() {
    emit(PancakeState(state.stack.length)); // shuffle the stack
  }

  void flip(int index) {
    // Flip the portion of the stack from the top to the selected index
    List<int> newStack = [
      ...state.stack.sublist(0, index + 1).reversed,
      ...state.stack.sublist(index + 1)
    ];
    bool sorted = PancakeState(newStack.length).checkSorted(newStack);
    emit(PancakeState(state.stack.length, isSorted: sorted)..stack = newStack);
  }
}

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Pancake Sorting - David Zuniga",
      home: PancakeHome(),
      theme: ThemeData.dark(),
    );
  }
}

class PancakeHome extends StatelessWidget {
  const PancakeHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Pancake Sorting")),
      body: PancakeBody(),
    );
  }
}

class PancakeBody extends StatelessWidget {
  const PancakeBody({super.key});

  @override
  Widget build(BuildContext context) {
    TextEditingController tec = TextEditingController();
    tec.text = "5"; // default number of pancakes

    return BlocProvider<PancakeCubit>(
      create: (context) => PancakeCubit(5),
      child: BlocBuilder<PancakeCubit, PancakeState>(
        builder: (context, pancakeState) {
          if (pancakeState.isSorted) {
            // Show "You Win" screen when sorted
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "🎉 You Win! 🎉",
                    style: TextStyle(fontSize: 40, color: Colors.greenAccent),
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () {
                      BlocProvider.of<PancakeCubit>(context).randomizeStack();
                    },
                    child: const Text("Start Over"),
                  ),
                ],
              ),
            );
          }

          return Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Pancake stack inside a Scrollable View
              Expanded(
                child: SingleChildScrollView(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: pancakeState.stack
                        .asMap()
                        .entries
                        .map((entry) {
                          int index = entry.key;
                          int size = entry.value;
                          return GestureDetector(
                            onTap: () {
                              // Flip all pancakes from the top down to the tapped one
                              BlocProvider.of<PancakeCubit>(context).flip(index);
                            },
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Container(
                                width: size * 30.0,
                                height: 30.0,
                                decoration: BoxDecoration(
                                  color: Colors.brown,
                                  borderRadius: BorderRadius.circular(15),
                                  border: Border.all(color: Colors.amber, width: 2),
                                ),
                              ),
                            ),
                          );
                        })
                        .toList(),
                  ),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    onPressed: () {
                      int n = int.parse(tec.text);
                      if (n > 2) {
                        BlocProvider.of<PancakeCubit>(context).update(n - 1);
                        tec.text = (n - 1).toString();
                      }
                    },
                    icon: const Icon(Icons.remove),
                  ),
                  SizedBox(
                    width: 50,
                    child: TextField(
                      controller: tec,
                      textAlign: TextAlign.center,
                      keyboardType: TextInputType.number,
                      style: const TextStyle(color: Colors.white),
                    ),
                  ),
                  IconButton(
                    onPressed: () {
                      int n = int.parse(tec.text);
                      if (n < 20) {
                        BlocProvider.of<PancakeCubit>(context).update(n + 1);
                        tec.text = (n + 1).toString();
                      }
                    },
                    icon: const Icon(Icons.add),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              // New Stack Button
              FloatingActionButton(
                onPressed: () {
                  // Generate a new stack with the same number of pancakes
                  BlocProvider.of<PancakeCubit>(context).randomizeStack();
                },
                child: const Center(child: Text("New Stack", textAlign: TextAlign.center)),
              ),
              const SizedBox(height: 20),
            ],
          );
        },
      ),
    );
  }
}
