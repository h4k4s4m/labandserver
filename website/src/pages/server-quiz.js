import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from '../css/styles.module.css';

function ServerQuiz() {
    const [results, setResults] = useState(null);
    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            id: 'budget',
            label: '1. What is your budget?',
            type: 'radio',
            options: [
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' }
            ]
        },
        {
            id: 'desktop',
            label: '2. Do you have a desktop you can use already?',
            type: 'radio',
            options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
            ]
        },
        {
            id: 'tasks',
            label: '3. What types of tasks do you want to run?',
            type: 'checkbox',
            options: [
                { value: 'media', label: 'Media Streaming' },
                { value: 'storage', label: 'File Storage' },
                { value: 'automation', label: 'Home Automation' },
                { value: 'web', label: 'Web Hosting' },
                { value: 'other', label: 'Other' }
            ]
        },
        {
            id: 'power',
            label: '4. How important is power efficiency?',
            type: 'radio',
            options: [
                { value: 'very', label: 'Very Important' },
                { value: 'somewhat', label: 'Somewhat Important' },
                { value: 'not', label: 'Not Important' }
            ]
        },
        {
            id: 'experience',
            label: '5. How much experience do you have with server administration?',
            type: 'radio',
            options: [
                { value: 'beginner', label: 'Beginner' },
                { value: 'intermediate', label: 'Intermediate' },
                { value: 'advanced', label: 'Advanced' }
            ]
        },
        {
            id: 'space',
            label: '6. How much physical space do you have available?',
            type: 'radio',
            options: [
                { value: 'very_limited', label: 'Very Limited' },
                { value: 'limited', label: 'Limited' },
                { value: 'moderate', label: 'Moderate' },
                { value: 'plenty', label: 'Plenty' }
            ]
        },
        {
            id: 'expandability',
            label: '7. How important is expandability?',
            type: 'radio',
            options: [
                { value: 'very', label: 'Very Important' },
                { value: 'somewhat', label: 'Somewhat Important' },
                { value: 'not', label: 'Not Important' }
            ]
        },
        {
            id: 'noise',
            label: '8. How important is noise level?',
            type: 'radio',
            options: [
                { value: 'very', label: 'Very Important' },
                { value: 'somewhat', label: 'Somewhat Important' },
                { value: 'not', label: 'Not Important' }
            ]
        },
        {
            id: 'reliability',
            label: '9. How important is reliability?',
            type: 'radio',
            options: [
                { value: 'very', label: 'Very Important' },
                { value: 'somewhat', label: 'Somewhat Important' },
                { value: 'not', label: 'Not Important' }
            ]
        },
        {
            id: 'performance',
            label: '10. How important is performance?',
            type: 'radio',
            options: [
                { value: 'very', label: 'Very Important' },
                { value: 'somewhat', label: 'Somewhat Important' },
                { value: 'not', label: 'Not Important' }
            ]
        }
    ];

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(curr => curr + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(curr => curr - 1);
        }
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        
        if (type === 'checkbox') {
            setAnswers(prev => ({
                ...prev,
                [name]: checked 
                    ? [...(prev[name] || []), value]
                    : (prev[name] || []).filter(item => item !== value)
            }));
        } else {
            setAnswers(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const topOptions = calculateTopOptions(answers);
        setResults(topOptions);
    };

    const calculateTopOptions = (answers) => {
        const serverOptions = [
            {
                name: "Raspberry Pi 4/5",
                matches: {
                    budget: ["low"],
                    power: ["very"],
                    space: ["very_limited", "limited"],
                    experience: ["beginner"],
                    tasks: ["media", "storage", "automation", "web", "other"]
                },
                description: "Good for low budget, low power, small tasks, beginner friendly."
            },
            {
                name: "Thin Client",
                 matches: {
                    budget: ["low", "medium"],
                    power: ["very", "somewhat"],
                    space: ["very_limited", "limited", "moderate"],
                    experience: ["intermediate"],
                    tasks: ["media", "storage", "automation", "web", "other"]
                },
                description: "Good for low budget, low power, small to medium tasks, intermediate friendly."
            },
            {
                name: "Old Laptop/Desktop",
                 matches: {
                    budget: ["medium"],
                    power: ["somewhat", "not"],
                    space: ["moderate", "plenty"],
                    experience: ["beginner", "intermediate"],
                    tasks: ["media", "storage", "automation", "web", "other"]
                },
                description: "Good for medium budget, medium power, medium to large tasks, beginner to intermediate friendly."
            },
             {
                name: "Desktop/Tower Server",
                 matches: {
                    budget: ["medium", "high"],
                    power: ["somewhat", "not"],
                    space: ["moderate", "plenty"],
                    experience: ["intermediate", "advanced"],
                     tasks: ["media", "storage", "automation", "web", "other"]
                },
                description: "Good for medium to high budget, medium to high power, large tasks, intermediate to advanced friendly."
            },
            {
                name: "Rack Mounted Server",
                 matches: {
                    budget: ["high"],
                    power: ["not"],
                    space: ["plenty"],
                    experience: ["advanced"],
                     tasks: ["media", "storage", "automation", "web", "other"]
                },
                description: "Good for high budget, high power, large tasks, advanced friendly."
            }
        ];

        const scoredOptions = serverOptions.map(option => {
            let score = 0;
            for (const key in option.matches) {
                if (answers[key]) {
                    if (Array.isArray(answers[key])) {
                        answers[key].forEach(answer => {
                            if (option.matches[key].includes(answer)) {
                                score++;
                            }
                        })
                    } else if (option.matches[key].includes(answers[key])) {
                        score++;
                    }
                }
            }
            return { ...option, score };
        }).sort((a, b) => b.score - a.score);


        return scoredOptions.slice(0, 3);
    };


  return (
    <Layout title="Server Quiz" description="Find the perfect home server for you!">
      <main className={styles.quizContainer}>
        <div className={styles.questionCard}>
          {!results ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.questionContent}>
                <h2>{questions[currentQuestion].label}</h2>
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className={styles.optionItem}>
                    <input
                      type={questions[currentQuestion].type}
                      id={`${questions[currentQuestion].id}-${option.value}`}
                      name={questions[currentQuestion].id}
                      value={option.value}
                      checked={questions[currentQuestion].type === 'checkbox' 
                        ? answers[questions[currentQuestion].id]?.includes(option.value)
                        : answers[questions[currentQuestion].id] === option.value}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${questions[currentQuestion].id}-${option.value}`}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className={styles.navigationButtons}>
                <button 
                  type="button" 
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                {currentQuestion === questions.length - 1 ? (
                  <button type="submit">Submit</button>
                ) : (
                  <button 
                    type="button" 
                    onClick={handleNext}
                  >
                    Next
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className={styles.card}>
              <h2>Top 3 Server Options</h2>
              {results.map((option, index) => (
                <div key={index}>
                  <h3>{option.name}</h3>
                  <p>{option.description}</p>
                  <p>Matches on: {Object.keys(option.matches).filter(key => {
                    if (Array.isArray(answers[key])) {
                      return answers[key].some(answer => option.matches[key].includes(answer))
                    } else {
                      return option.matches[key].includes(answers[key])
                    }
                  }).join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default ServerQuiz;
