document.addEventListener("DOMContentLoaded", function () {
  //DS-Chat menu
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu!=null){
    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown";

    const menuItems = [
      { text: "第1章：DeepSpeed-Chat训练实战", href: "/big-model-training/deepspeed/deepspeed-chat.html" },
      { text: "第2章：DeepSpeed-Chat代码分析", href: "/big-model-training/deepspeed/deepspeed-chat-code.html" },
      { text: "第3章：DeepSpeed-Chat 模型与数据", href: "/big-model-training/deepspeed/deepspeed-chat-model-data.html" },
      { text: "第4章：跟大牛学LLM训练和使用技巧", href: "/big-model-training/deepspeed/LLM-state-of-GPT.html" },
      { text: "第5章：HF Transformers Generate功能介绍", href: "/big-model-training/deepspeed/HF-transformers-generate.html" },
    ];
    menuItems.forEach((item) => {
      const link = document.createElement("a");
      link.textContent = item.text;
      link.href = item.href;
      dropdownContent.appendChild(link);
    });

    dropdownMenu.appendChild(dropdownContent);
  }
  
  //AI-game
  const dropdownMenuAIGame = document.getElementById("dropdown-menuAIGame");
  if (dropdownMenuAIGame!=null){
    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown";
    const menuItems = [
      { text: "第1章：AI挑战贪吃蛇专题介绍", href: "/AI-Game/snake/01-AI-snake-intro.html" },
      { text: "第2章：AI贪吃蛇环境安装", href: "/AI-Game/snake/02-snake-ai-install.html" },
    ];
    menuItems.forEach((item) => {
      const link = document.createElement("a");
      link.textContent = item.text;
      link.href = item.href;
      dropdownContent.appendChild(link);
    });

    dropdownMenuAIGame.appendChild(dropdownContent);
  }

  
  //AI-game
  const dropdownMenuZhuanTiList = document.getElementById("dropdown-zhuanti");
  if (dropdownMenuZhuanTiList!=null){
    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown";
    const menuItems = [
      { text: "《大模型训练技术实战入门》", href: "/big-model-training/deepspeed/deepspeed-chat.html" },
      { text: "《AI打爆贪吃蛇》", href: "/AI-Game/snake/01-AI-snake-intro.html" },
    ];
    menuItems.forEach((item) => {
      const link = document.createElement("a");
      link.textContent = item.text;
      link.href = item.href;
      dropdownContent.appendChild(link);
    });

    dropdownMenuZhuanTiList.appendChild(dropdownContent);
  }

});
