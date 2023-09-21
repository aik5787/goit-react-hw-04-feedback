import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedbackClick = option => {
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleFeedbackClick={handleFeedbackClick}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// import { Component } from 'react';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedbackClick = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleFeedbackClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
