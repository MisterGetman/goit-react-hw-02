import css from "./Options.module.css";

const Options = ({ totalFeedback, updateFeedback }) => {
  return (
    <div className={css.optsContainer}>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={() => updateFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
