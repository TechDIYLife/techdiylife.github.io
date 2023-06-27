document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownContent = document.createElement("div");
  dropdownContent.className = "dropdown";

  const menuItems = [
    { text: "第1章：DeepSpeed-Chat训练实战", href: "../big-model-deepspeed/deepspeed-chat.html" },
    { text: "第2章：DeepSpeed-Chat代码分析", href: "../big-model-deepspeed/deepspeed-chat-code.html" },
    { text: "第3章：DeepSpeed-Chat 模型与数据", href: "../big-model-deepspeed/deepspeed-chat-model-data.html" },
    { text: "第4章：跟大牛学LLM训练和使用技巧", href: "../big-model-deepspeed/LLM-state-of-GPT.html" },
    { text: "第5章：HF Transformers Generate功能介绍", href: "../big-model-deepspeed/HF-transformers-generate.html" },
  ];

  menuItems.forEach((item) => {
    const link = document.createElement("a");
    link.textContent = item.text;
    link.href = item.href;
    dropdownContent.appendChild(link);
  });

  dropdownMenu.appendChild(dropdownContent);
});
