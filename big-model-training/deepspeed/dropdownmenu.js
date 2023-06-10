document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownContent = document.createElement("div");
  dropdownContent.className = "dropdown";

  const menuItems = [
    { text: "第1章：DeepSpeed-Chat训练实战", href: "deepspeed-chat.html" },
    { text: "第2章：DeepSpeed-Chat代码分析", href: "deepspeed-chat-code.html" },
    { text: "第3章：DeepSpeed-Chat 模型与数据", href: "deepspeed-chat-model-data.html" },
    { text: "分享1：跟大牛学LLM训练和使用技巧", href: "LLM-state-of-GPT.html" },
  ];

  menuItems.forEach((item) => {
    const link = document.createElement("a");
    link.textContent = item.text;
    link.href = item.href;
    dropdownContent.appendChild(link);
  });

  dropdownMenu.appendChild(dropdownContent);
});
