const Api = () => {
  let text = document.getElementById("text_to_summarize").value;
  let output = document.getElementById("summary");

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  };

  query({ "inputs": text, }).then((response) => {
    output.innerHTML = response[0]?.summary_text;
  });
};