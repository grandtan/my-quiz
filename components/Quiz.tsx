// src/components/Quiz.tsx
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Question } from "../models/Question";
import { shuffleArray } from "../utils/shuffle";

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  // Add 19 more questions here
];

const Quiz: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);
  }, []);

  return (
    <View style={styles.container}>
      {shuffledQuestions.map((q, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{q.question}</Text>
          {shuffleArray(q.answers).map((answer, i) => (
            <Button key={i} title={answer} onPress={() => {}} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Quiz;
