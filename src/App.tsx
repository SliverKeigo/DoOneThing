import React from "react";
import Form from "./components/CustomForm";
import OneThing from "./components/OneThing";
import JSConfetti from "js-confetti";

function App() {
  const [isCompleted, setIsCompleted] = React.useState(true);
  const [thing, setThing] = React.useState('');
  const jsConfetti = new JSConfetti();

  const getSuccessMessage = () => {
    const messages = [
      "You did it!",
      "Great job!",
      "Awesome!",
      "Well done!",
      "Congratulations!",
      "You rock!",
      "You're the best!",
      "You're a star!",
      "You're amazing!",
      "You're a legend!",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleCompletedThing = async () => {
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ['🎉', '🎊', '🎈', '🥳', '🌟', '👏', '🙌', '🍾', '🎆', '🎇'],
    });
    setThing('');
    setIsCompleted(true);
  };

  return (
    <main
      className="grid place-items-center min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]"
    >
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <>
            <h1 className="text-2xl sm:text-4xl font-bold text-center">
              What is your "One Thing"?
            </h1>
            <Form setIsCompleted={setIsCompleted} thing={thing} setThing={setThing} />
          </>
        )}
        {!isCompleted && <OneThing thing={thing} setThing={setThing} completedThing={handleCompletedThing} />}
      </div>
    </main>
  );
}

export default App;