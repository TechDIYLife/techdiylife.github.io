const category1List = [
  { id: "c01", title_full: "AI相关动态，闲谈", title_short:"" },
  { id: "c02", title_full: "大模型技术", title_short:"" },
  { id: "c03", title_full: "IT技术与日常应用", title_short:"" },
  { id: "c04", title_full: "AI与游戏", title_short:"" },
  { id: "c05", title_full: "会员活动", title_short:"" },
];

const category2List = [
  { id: "t01", title_full: "专题：大模型训练技术快速入门", title_short: "大模型训练" },
  { id: "t02", title_full: "专题：ChatGPT插件开发", title_short: "ChatGPT插件" },
  { id: "t03", title_full: "专题：OpenAI API应用-复现Gemini演示视频", title_short: "复现Gemini演示视频" },
  { id: "t04", title_full: "专题：AI打爆贪吃蛇", title_short: "AI贪吃蛇" },
  { id: "t05", title_full: "专题：Transformers开发常见百个问题", title_short: "Transformers百问" },
  { id: "t06", title_full: "专题：本地AI环境搭建", title_short: "本地AI环境搭建" },
  { id: "t07", title_full: "专题：LangChain + RAG 参考资料", title_short: "RAG专题" },
  { id: "t08", title_full: "专题：爱鼓捣AI排行榜", title_short: "爱鼓捣AI排行榜" },

];


const blogList = [
  { id: "0001", category1: "c02", category2: "t01", create_date: "2023.04.16", title_short: "第1章：DeepSpeed-Chat 模型训练实战", title_full: "第1章：DeepSpeed-Chat 模型训练实战", href: "202304/230416-deepspeed-chat.html", video_href: "" },
  { id: "0002", category1: "c02", category2: "t01", create_date: "2023.04.26", title_short: "第2章：DeepSpeed-Chat 代码分析", title_full: "第2章：DeepSpeed-Chat 代码分析", href: "202304/230424-deepspeed-chat-code.html", video_href: "" },
  { id: "0003", category1: "c02", category2: "t01", create_date: "2023.05.06", title_short: "第3章：DeepSpeed-Chat 模型与数据", title_full: "第3章：DeepSpeed-Chat 模型与数据", href: "202304/230506-deepspeed-chat-model-data.html", video_href: "" },
  { id: "0004", category1: "c02", category2: "t01", create_date: "2023.06.10", title_short: "第4章：跟大牛学LLM训练和使用技巧", title_full: "第4章：跟大牛学LLM训练和使用技巧", href: "202304/230610-LLM-state-of-GPT.html", video_href: "" },
  { id: "0005", category1: "c02", category2: "t01", create_date: "2023.06.15", title_short: "第5章：Transformers Generate 功能介绍", title_full: "第5章：Transformers Generate 功能介绍", href: "202304/230615-HF-transformers-generate.html", video_href: "" },

  { id: "0006", category1: "c02", category2: "t02", create_date: "2023.04.08", title_short: "ChatGPT插件开发", title_full: "1 ChatGPT插件开发", href: "202304/230408-chat-plugins-overview.html", video_href: "" },
  { id: "0007", category1: "c02", category2: "t02", create_date: "2023.04.09", title_short: "TODO待办事项案例实战", title_full: "2 TODO待办事项案例实战", href: "202304/230409-chat-plugins-examples.html", video_href: "" },

  { id: "0008", category1: "c02", category2: "", create_date: "2023.06.28", title_short: "GPT Prompt提示词最佳实践", title_full: "GPT Prompt提示词最佳实践", href: "202304/230628-GPT-best-practices-chapter1.html", video_href: "" },
  { id: "0009", category1: "c02", category2: "", create_date: "2023.10.12", title_short: "ChatGPT高质量翻译的提示词技巧", title_full: "ChatGPT高质量翻译的提示词技巧", href: "202304/231012-GPT-for-translate.html", video_href: "" },
  { id: "0010", category1: "c01", category2: "", create_date: "2023.10.09", title_short: "AI审稿人：审你的稿，项目，甚至你的绩效", title_full: "GPT-4 将审你的稿，项目，甚至你的绩效", href: "202304/231009-GPT-shengao.html", video_href: "" },
  { id: "0011", category1: "c02", category2: "", create_date: "2023.10.09", title_short: "LLM开源模型调查", title_full: "LLM开源模型调查", href: "202304/231017-LLM-OpenModels.html", video_href: "" },
  { id: "0012", category1: "c01", category2: "", create_date: "2023.12.07", title_short: "谷歌最新大模型 Gemini 相关资料整理", title_full: "谷歌最新大模型 Gemini 相关资料整理", href: "202304/231207-Gemini-1.html", video_href: "" },

  { id: "0013", category1: "c04", category2: "t04", create_date: "2023.09.21", title_short: "第1章：AI打爆贪吃蛇专题介绍", title_full: "第1章：AI打爆贪吃蛇专题介绍", href: "202304/230921-AI-snake-intro.html", video_href: "" },
  { id: "0014", category1: "c04", category2: "t04", create_date: "2023.09.22", title_short: "第2章 AI打爆贪吃蛇：开发环境安装", title_full: "第2章 AI打爆贪吃蛇：开发环境安装", href: "202304/230922-AI-snake-install.html", video_href: "" },

  { id: "0015", category1: "c02", category2: "t03", create_date: "2023.12.13", title_short: "开发基于语音视频的对话AI", title_full: "使用OpenAI API制作基于语音视频的对话AI", href: "202312/231213-Challenge-hands-free-1.html", video_href: "" },
  { id: "0016", category1: "c02", category2: "t03", create_date: "2023.12.13", title_short: "快速入门 OpenAI API 手册", title_full: "快速入门 OpenAI API 手册", href: "202312/231213-ChatGPT-API.html", video_href: "" },
  { id: "0017", category1: "c03", category2: "", create_date: "2023.12.22", title_short: "三步搞定 VMWare Windows 11 虚拟机", title_full: "三步搞定 VMWare Windows 11 虚拟机", href: "202312/231221-VMWare.html", video_href: "" },
  { id: "0018", category1: "c03", category2: "t03", create_date: "2023.12.29", title_short: "PyQt5图形界面GUI开发", title_full: "Python 图形界面GUI开发库 PYQT5 快速入门", href: "202312/231224-Python-GUI-pyqt5.html", video_href: "" },
  { id: "0019", category1: "c03", category2: "t03", create_date: "2023.12.30", title_short: "模糊图像检测", title_full: "OpenCV模糊图像检测", href: "202312/231227-Blurry.html", video_href: "" },
  { id: "0020", category1: "c02", category2: "", create_date: "2024.01.07", title_short: "5行代码实现基于OpenAI API语音识别", title_full: "三分钟！只需5行代码就可实现基于OpenAI API的语音识别", href: "202401/240107-OpenAI-API-ASR.html", video_href: "" },
  { id: "0021", category1: "c02", category2: "", create_date: "2024.01.13", title_short: "五分钟掌握Faster Whisper语音识别模型", title_full: "五分钟！学会Window上都可运行的高精度语音识别模型Faster-whisper，完全免费开源", href: "202401/240108-Faster-Whisper.html", video_href: "" },
  { id: "0022", category1: "c02", category2: "", create_date: "2024.01.20", title_short: "快速体验Qwen-Audio语音识别", title_full: "五分钟！快速体验Qwen-Audio语音识别，阿里最新开源的大语音模型", href: "202401/240114-Qwen-Audio-4ASR.html", video_href: "" },
  { id: "0023", category1: "c02", category2: "", create_date: "2024.01.27", title_short: "Colossal-AI大模型高速训练工具快速入门", title_full: "五分钟！Colossal-AI大模型高速训练工具快速入门", href: "202401/240127-Colossal-AI-Intro.html", video_href: "" },
  { id: "0024", category1: "c03", category2: "", create_date: "2024.02.17", title_short: "避坑必备：免安装便携版VSCode", title_full: "避坑必备：免安装便携版VSCode", href: "202401/240217-VSCode-Bug.html", video_href: "" },
  { id: "0025", category1: "c02", category2: "t05", create_date: "2024.02.29", title_short: "小显存GPU如何调试大模型？", title_full: "Transformers开发百问：小显存GPU如何调试大模型？", href: "202401/240228-LLM-Debug.html", video_href: "" },
  { id: "0026", category1: "c02", category2: "t05", create_date: "2024.03.01", title_short: "专题介绍：Transformers开发百问", title_full: "专题汇总介绍：Transformers开发常见百个问题", href: "202401/Topic-Transformers-Dev.html", video_href: "" },
  { id: "0027", category1: "c02", category2: "t06", create_date: "2024.03.01", title_short: "专题介绍：AI开发者de本地AI环境搭建", title_full: "专题汇总介绍：AI开发者de本地AI环境搭建", href: "202401/Topic-Local-LLM-deployment.html", video_href: "" },
  { id: "0028", category1: "c02", category2: "t06", create_date: "2024.03.02", title_short: "Linux上搭建 Jupyter notebook", title_full: "Linux上搭建类似Colab的开发环境 Jupyter Notebook", href: "202401/240302-Jupyter-Install.html", video_href: "" },
  { id: "0029", category1: "c02", category2: "t05", create_date: "2024.03.07", title_short: "使用 Auto_map 功能开发自定义模型", title_full: "Transformers开发：使用 auto_map 开发自定义模型", href: "202401/240306-auto-map.html", video_href: "" },
  { id: "0030", category1: "c01", category2: "", create_date: "2024.03.09", title_short: "开源大模型下载量排行榜（2024年3月更新版）", title_full: "开源大模型下载量排行榜（2024年3月更新版）", href: "202401/240309-LLM-OpenModels.html", video_href: "" },
  { id: "0031", category1: "c02", category2: "t05", create_date: "2024.03.13", title_short: "如何知道一个大模型在推理和训练时需要多少显存？", title_full: "如何知道一个大模型在推理和训练时需要多少显存？", href: "202401/240313-LLM-Memory.html", video_href: "" },
  { id: "0032", category1: "c05", category2: "", create_date: "2024.03.14", title_short: "AI共学会：LLM部署实战交流", title_full: "AI共学会：LLM部署实战交流", href: "202401/member-gongxue-bushu-1.html", video_href: "" },
  { id: "0033", category1: "c02", category2: "t05", create_date: "2024.03.16", title_short: "大模型推理技巧：分层推理法", title_full: "大模型推理技巧：分层推理法", href: "202401/240316-LLM-Inference.html", video_href: "" },
  { id: "0034", category1: "c02", category2: "t06", create_date: "2024.03.20", title_short: "大家都在用哪个LLM本机推理，部署工具？", title_full: "大家都在用哪个LLM本机推理，部署工具？", href: "202401/240320-Inference-tools.html", video_href: "" },
  { id: "0035", category1: "c05", category2: "", create_date: "2024.03.23", title_short: "AI共学会：Transformers开发百问交流群", title_full: "AI共学会：Transformers开发百问交流群", href: "202401/member-gongxue-transformers-2.html", video_href: "" },
  { id: "0036", category1: "c02", category2: "t06", create_date: "2024.03.27", title_short: "Linux上安装 Ollama + Open WebUI", title_full: "Linux上安装 Ollama + Open WebUI", href: "202401/240327-ollama-openwebui-linux.html", video_href: "" },
  { id: "0037", category1: "c02", category2: "t06", create_date: "2024.03.27", title_short: "ollama应用全面解析：20个问题精通ollama", title_full: "ollama应用全面解析：20个问题精通ollama", href: "202401/240327-ollama-20question.html", video_href: "" },

  { id: "0038", category1: "c02", category2: "t07", create_date: "2024.04.01", title_short: "基于 LangChain 的 RAG 开发实战学习资料", title_full: "基于 LangChain 的 RAG 开发实战学习资料", href: "202401/240402-langchain-rag-00.html", video_href: "" },
  { id: "0039", category1: "c02", category2: "t07", create_date: "2024.04.02", title_short: "LangChain文档中文版：介绍", title_full: "LangChain文档中文版：介绍", href: "202401/240402-langchain-rag-01-introduction.html", video_href: "" },
  { id: "0040", category1: "c02", category2: "t07", create_date: "2024.04.03", title_short: "LangChain文档中文版：安装", title_full: "LangChain文档中文版：安装", href: "202401/240402-langchain-rag-02-install.html", video_href: "" },
  { id: "0041", category1: "c02", category2: "t07", create_date: "2024.04.04", title_short: "LangChain文档中文版：快速入门", title_full: "LangChain文档中文版：快速入门", href: "202401/240402-langchain-rag-03-quickstart.html", video_href: "" },

  { id: "0042", category1: "c02", category2: "t05", create_date: "2024.04.04", title_short: "GaLore 技术全参数训练模型，真的实用吗？", title_full: "GaLore 技术全参数训练模型，真的实用吗？", href: "202401/240403-GaLore.html", video_href: "" },
  { id: "0043", category1: "c02", category2: "t07", create_date: "2024.04.06", title_short: "LangChain快速入门 (学习笔记)", title_full: "LangChain快速入门 (学习笔记)", href: "202401/240406-langchain-rag-03-quickstart-summary.html", video_href: "" },
  { id: "0044", category1: "c02", category2: "t07", create_date: "2024.04.11", title_short: "LangChain文档中文版：数据检索（概要）", title_full: "LangChain文档中文版：数据检索（概要）", href: "202401/240406-langchain-rag-04-retrieval-overview.html", video_href: "" },
  { id: "0045", category1: "c02", category2: "t07", create_date: "2024.04.11", title_short: "使用Zephyr和LangChain快速构建RAG", title_full: "使用 Hugging Face Zephyr 和 LangChain 快速构建 RAG", href: "202401/240411-LangChain-RAG-Baseline.html", video_href: "" },
  { id: "0046", category1: "c02", category2: "t07", create_date: "2024.04.13", title_short: "10个问题带你了解RAG", title_full: "LangChain + RAG 概念篇： 10个问题带你了解RAG", href: "202401/240412-RAG-10QA.html", video_href: "" },
  { id: "0047", category1: "c02", category2: "t07", create_date: "2024.04.20", title_short: "如何选择RAG的Embedding模型？", title_full: "如何选择RAG的Embedding模型？", href: "202401/240420-RAG-how-to-select-embedding.html", video_href: "" },
  { id: "0048", category1: "c02", category2: "t07", create_date: "2024.04.27", title_short: "Rerankers和两阶段RAG检索", title_full: "Rerankers和两阶段RAG检索", href: "202401/240421-RAG-rerank.html", video_href: "" },
  { id: "0049", category1: "c02", category2: "t07", create_date: "2024.04.28", title_short: "ReRank模型以及如何选择RAG的ReRank模型？", title_full: "ReRank模型以及如何选择RAG的ReRank模型？", href: "202401/240421-RAG-how-to-select-rerank.html", video_href: "" },
  { id: "0050", category1: "c02", category2: "t07", create_date: "2024.05.02", title_short: "RAG共学一：16个问题帮你快速入门RAG", title_full: "RAG共学一：16个问题帮你快速入门RAG", href: "202401/240501-RAG-Scratch-Step1to4-1.html", video_href: "" },
  { id: "0051", category1: "c02", category2: "t07", create_date: "2024.05.18", title_short: "如何在云服务器上学习RAG？", title_full: "如何在云服务器上学习RAG？", href: "202401/240518-RAG-Use-ShareHost.html", video_href: "" },
  { id: "0052", category1: "c02", category2: "t07", create_date: "2024.05.24", title_short: "如何使用LangSmith创建测试数据以及对RAG评估？", title_full: "如何使用LangSmith创建测试数据以及对RAG评估？", href: "202401/240523-RAG-Evaluation.html", video_href: "" },
  { id: "0053", category1: "c02", category2: "t07", create_date: "2024.05.30", title_short: "RAG评估资料大全", title_full: "RAG评估资料大全", href: "202401/240528-PT-RAG_LangChain-Eval.html", video_href: "" },
  { id: "0054", category1: "c02", category2: "", create_date: "2024.06.01", title_short: "2360亿参数的DeepSeek V2 Chat", title_full: "如何使用2360亿参数的DeepSeek V2 Chat？", href: "202401/240519-RAG-QuickRAG-deepseek.html", video_href: "" },
  { id: "0055", category1: "c01", category2: "t08", create_date: "2024.06.02", title_short: "排行榜：Ollama模型最新下载排行榜", title_full: "排行榜：Ollama模型最新下载排行榜", href: "ranking/aigudao_rank_LLM_ollama_lastest.html", video_href: "" },
  { id: "0056", category1: "c01", category2: "t08", create_date: "2024.06.15", title_short: "排行榜：Huggingface模型最新下载排行榜", title_full: "排行榜：Huggingface模型最新下载排行榜", href: "ranking/aigudao_rank_LLM_hf_lastest.html", video_href: "" },
  { id: "0057", category1: "c01", category2: "t08", create_date: "2024.06.16", title_short: "排行榜：ModelScope模型最新下载排行榜", title_full: "排行榜：ModelScope模型最新下载排行榜", href: "ranking/aigudao_rank_LLM_ms_lastest.html", video_href: "" },
  { id: "0058", category1: "c01", category2: "t08", create_date: "2024.06.23", title_short: "LLM基础资料整理：推理所需显存与速度", title_full: "LLM基础资料整理：推理所需显存与速度", href: "ranking/aigudao-rank-LLM-MemoryUsage.html", video_href: "" },
  { id: "0059", category1: "c01", category2: "t08", create_date: "2024.06.30", title_short: "排行榜：AI大模型性能排行榜", title_full: "排行榜：AI大模型性能排行榜", href: "ranking/aigudao_rank_LLM_performance.html", video_href: "" },
  { id: "0060", category1: "c01", category2: "t06", create_date: "2024.07.01", title_short: "如何将ollama升级来试用Gemma2？", title_full: "如何将ollama升级来试用Gemma2？", href: "202401/240701-Try-LLM.html", video_href: "" },
  { id: "0061", category1: "c01", category2: "t07", create_date: "2024.07.14", title_short: "GraphRAG快速入门", title_full: "GraphRAG快速入门", href: "202401/240713-graph-rag.html", video_href: "" },
  { id: "0062", category1: "c01", category2: "t07", create_date: "2024.08.07", title_short: "用72B Qwen2跑一次GraphRAG要多少钱？", title_full: "用72B Qwen2跑一次GraphRAG要多少钱？", href: "202401/240801-AD-zhisuanyun.html", video_href: "" },

];

const NeWvideoList = [
  
  { memo: "rerank模型如何选？", href: "https://www.youtube.com/embed/9RQNKoaw2kg?si=ayXPwgk6aHOI-nbQ" },
  { memo: "Embedding如何选？", href: "https://www.youtube.com/embed/HNjYL0gSExs?si=bVL93oDkelJouDER" },
  { memo: "RAG-intro", href: "https://www.youtube.com/embed/d60FAktet4M?si=debQ1KC4DukCfLa_" },
  { memo: "openai api预算限制", href: "https://www.youtube.com/embed/oON4slDzaSw?si=yedcVQSmVkRIDQ7b" },
  { memo: "20个Ollama问题", href: "https://www.youtube.com/embed/jici2ffUHug?si=8EXF5d7TO3ondvjB" },
  { memo: "Ollama", href: "https://www.youtube.com/embed/sf39i53XdBw?si=M8RhHInZlNYcsHQI" },
  { memo: "LLM部署工具", href: "https://www.youtube.com/embed/G4YbZfXdsJM?si=G66g6dzXqzS3xvZG" },
  { memo: "分层推理法", href: "https://www.youtube.com/embed/A5cxHkRBx7o?si=3SCb77e_yk4H8Ebm" },
  { memo: "Estimate Memory", href: "https://www.youtube.com/embed/Z9eV9mbB6uY?si=ZXnKk11NWNNG4jjv" },
  { memo: "LLM rank", href: "https://www.youtube.com/embed/Ur65L4iAM4o?si=nnbANprNJjFznOVp" },
  { memo: "Auto-map", href: "https://www.youtube.com/embed/rIk0OWz3tsc?si=SGrFJIizKUGm_iis" },
  { memo: "Jupyter install", href: "https://www.youtube.com/embed/FpWMhhGkyG0?si=xlqZw1MQTNnRy9s6" },
  { memo: "LLM debug", href: "https://www.youtube.com/embed/iaV9rCvFcGE?si=mQJRUD5bzd7iZvua" },
  { memo: "vscode", href: "https://www.youtube.com/embed/P-PezY3e2vI?si=xyIivFoOXBgxLDZX" },
  { memo: "Colossal-ai", href: "https://www.youtube.com/embed/AK5PM_WSqTY?si=wOxwx838-aqmP1V8" },
  { memo: "Qwen-VL", href: "https://www.youtube.com/embed/1PwBafQnCZQ?si=BkMjGph0kRpC9wv5" },
  { memo: "QwenAudio ASR", href: "https://www.youtube-nocookie.com/embed/fSo8IYm3Aq0?si=YmVmgTdwmzviM0to" },
  { memo: "GPT Store", href: "https://www.youtube-nocookie.com/embed/6twQZtJ9I3M?si=l1n_l37TT4B1EZcZ" },
  { memo: "FasterWhisper", href: "https://www.youtube-nocookie.com/embed/7J422fh2AdA?si=4DJ8DTWj-uj7Qh__" },
  { memo: "AI错题本制作2", href: "https://www.youtube-nocookie.com/embed/O9ildE5qwO8?si=PEcDlC9orbbMfTod" },
  { memo: "AI错题本制作1", href: "https://www.youtube-nocookie.com/embed/ef7Ww38th24?si=KOUaAa1bbevtzqv3" },
  { memo: "OpenAI API ASR", href: "https://www.youtube-nocookie.com/embed/-qXSsYtRB9Y?si=ihpKSOQj6lEY8iRz" },
  { memo: "AI视频年", href: "https://www.youtube-nocookie.com/embed/Z6TqSEBgdz0?si=jSAUiHihr5LvQCTt" },
  { memo: "语音AI收尾", href: "https://www.youtube-nocookie.com/embed/1wzS11LVXEE?si=XUneUnHi1msq-LE7" },
  { memo: "PyQt介绍", href: "https://www.youtube-nocookie.com/embed/GP3eedYiOns?si=ADEu-YPlvRdy2-bf" },
  { memo: "AI美颜", href: "https://www.youtube-nocookie.com/embed/VjdGG6-orxk?si=CkUybahuz5tjmcUc" },
  { memo: "虚拟机", href: "https://www.youtube-nocookie.com/embed/50NQ7KUC6-g?si=5AMXlfdmkzIQ7Dqo" },
  { memo: "为AI装眼睛", href: "https://www.youtube-nocookie.com/embed/XUVIrHlkF68?si=AYJOMn4H6sB25Fj6" },
  { memo: "语音对话AI", href: "https://www.youtube.com/embed/XU7uCeO_lmw?si=ui9lRumLwvA4ifCM" },
  { memo: "", href: "https://www.youtube.com/embed/M8r8bH8IiqM?si=CZkJkjrz1sVXWnY3" },
  { memo: "", href: "https://www.youtube.com/embed/cno5CsQMcig?si=DN5yFSGyg4OLYTA1" },
  { memo: "", href: "https://www.youtube.com/embed/fZy9HRrkNvc?si=oKiMbVe5AXesMMsu" },
];
////////////////////////////////////////////////////////////////////////////////////////////////////
// 获取URL参数
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

// 读取文章内容
function loadContent(href) {
  // 这里需要实现异步获取内容的逻辑
  // 例如，使用 fetch API
  fetch(href)
    .then(response => response.text())
    .then(data => {

      const chapterListDiv = document.getElementById("chapter_toc_list");
      if (chapterListDiv) {
        // 创建目录名称div
        //const headerDiv = document.createElement('div');
        //headerDiv.className = 'side-nav-header subheading';
        //headerDiv.textContent = '章节列表';
        //chapterListDiv.appendChild(headerDiv);

        // 提取目录
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        const h1Elements = doc.querySelectorAll('h1');
        const chapterList = document.createElement('div');

        h1Elements.forEach(h1 => {
          const listItem = document.createElement('a');
          const link = document.createElement('a');
          link.href = `#${h1.id}`;
          link.className = 'scroll-link side-nav-item no-wrap-link active';
          link.textContent = h1.textContent.slice(0, 20);
          listItem.appendChild(link);

          const subList = document.createElement('div');
          let nextElement = h1.nextElementSibling;

          while (nextElement) {
            if (nextElement.tagName === 'H2') {
              const subListItem = document.createElement('a');
              const subLink = document.createElement('a');
              subLink.href = `#${nextElement.id}`;
              subLink.className = 'scroll-link side-nav-item no-wrap-link';
              subLink.textContent = "" + nextElement.textContent.slice(0, 20);
              subListItem.appendChild(subLink);
              subList.appendChild(subListItem);
            } else if (nextElement.tagName === 'H1') {
              // 遇到下一个 H1，跳出循环
              break;
            }

            nextElement = nextElement.nextElementSibling;
          }

          if (subList.hasChildNodes()) {
            listItem.appendChild(subList);
          }

          chapterList.appendChild(listItem);
        });


        chapterListDiv.appendChild(chapterList);
      }

      // 更新浏览器的地址栏URL，但不刷新页面
      //window.history.pushState({}, '', `topic.html?category2=c01&blogid=${blogId}`);

      const blogBodyDiv = document.getElementById('blog_body');
      if (blogBodyDiv) {
        blogBodyDiv.innerHTML = data;
      }


    })
}


//页面内容处理
document.addEventListener("DOMContentLoaded", function () {
  const category1 = getQueryVariable('category1');
  const category2 = getQueryVariable('category2');
  const blogId = getQueryVariable('blogid');

  // Topic页面，Blog页面，左侧导航文章以及当前文档章节列表
  const blogListDiv1 = document.getElementById('category_blog_chapter_list');
  const blogListDiv2 = document.getElementById('topic_blog_chapter_list');
  filteredList=[];
  if (blogListDiv1) {
    filteredList = blogList.filter(item => item.category1 === category1);
  }
  if (blogListDiv2) {
    filteredList = blogList.filter(item => item.category2 === category2);
  }
  if (filteredList.length > 0 || blogId.length>0) {

    target_href = "";
    // 创建链接列表
    let isHeaderDivAdded = false;
    filteredList.forEach((item, index) => {
      const a = document.createElement('a');
      a.className = 'scroll-link side-nav-item no-wrap-link';
      a.textContent = item.title_short;
      //a.href = `javascript:void(0);`;
      //a.onclick = () => loadContent(item.href, item.id);
      if (blogListDiv1) {
        a.href = `blog.html?category1=${item.category1}&blogid=${item.id}`;
        blogListDiv1.appendChild(a);
      }
      
      if (blogListDiv2){
        a.href = `topic.html?category2=${item.category2}&blogid=${item.id}`;
        blogListDiv2.appendChild(a);
      } 
      

      if (blogId.length > 0 && item.id == blogId) {
        target_href = item.href;
      } else if (index == 0 && !blogId) {
        target_href = item.href;
      }
      if (target_href.length > 1 && !isHeaderDivAdded) {
        //添加一个div标记，用于存储文章目录
        const headerDiv = document.createElement('div');
        headerDiv.className = 'side-nav-header subheading';
        headerDiv.id = "chapter_toc_list";
        if (blogListDiv1) blogListDiv1.appendChild(headerDiv);
        if (blogListDiv2) blogListDiv2.appendChild(headerDiv);
        isHeaderDivAdded = true; // 设置标志，避免重复添加
      }
    });
    
    //如果BlogID与类别不一致，则更加blogID读取文章
    if (target_href.length <=0) {
      blogList.forEach((item, index) => {
        if (blogId.length > 0 && item.id == blogId) {
          target_href = item.href;
        }
      });
    }

    loadContent(target_href);
  }

  // 加载指定 blogId 的内容
  const selectedBlog = blogList.find(item => item.id === blogId);
  if (selectedBlog) {
    document.title = selectedBlog.title_full;
  }
  const selectedBTopic = category2List.find(item => item.id === category2);
  if (selectedBTopic) {
    document.title = selectedBTopic.title_full;
  }

  // Topic页面，左侧导航topic列表
  const topicListDiv = document.getElementById('other_topic_list');
  if (topicListDiv) {
    //const filteredList = category2List.filter(item => item.category1 === category);

    // 创建链接列表
    category2List.forEach(item => {
      const a = document.createElement('a');
      a.className = 'scroll-link side-nav-item no-wrap-link';
      a.textContent = item.title_full;
      //a.href = `javascript:void(0);`;
      //a.onclick = () => loadContent(item.href, item.id);
      a.href = `topic.html?category2=${item.id}`;
      topicListDiv.appendChild(a);
    });
  }

  // 最新文章（首页）
  const latestArticlesDiv = document.getElementById('home_blog_new_list');
  if (latestArticlesDiv) {
    // 按日期从新到旧排序
    blogList.sort((a, b) => new Date(b.create_date) - new Date(a.create_date));
    const firstTenBlogs = blogList.slice(0, 50);
    // 创建并插入链接
    firstTenBlogs.forEach(item => {
      const link = document.createElement('a');
      link.href = `blog.html?category1=${item.category1}&blogid=${item.id}`;
      link.innerHTML = `&bull; ${item.title_full} <div class="icon-item-tag">${item.create_date}</div>`;
      latestArticlesDiv.appendChild(link);
      latestArticlesDiv.appendChild(document.createElement('br')); // 添加换行
    });
  }

  // 所有文章（blog_list.html页面）
  const allArticlesDiv = document.getElementById('blog_list_all');
  if (allArticlesDiv) {
    // 按日期从新到旧排序
    blogList.sort((a, b) => new Date(b.create_date) - new Date(a.create_date));
    const firstTenBlogs = blogList;
    // 创建并插入链接
    firstTenBlogs.forEach(item => {
      const link = document.createElement('a');
      link.href = `blog.html?category1=${item.category1}&blogid=${item.id}`;
      link.innerHTML = `&bull; ${item.title_full} <div class="icon-item-tag">${item.create_date}</div>`;
      allArticlesDiv.appendChild(link);
      allArticlesDiv.appendChild(document.createElement('br')); // 添加换行
    });
  }


  // Top导航的专题list（所有页面）
  const topLeftNav = document.getElementById('page_top_left_nav');
  if (topLeftNav) {
    // 按日期从新到旧排序
    blogList.sort((a, b) => new Date(b.create_date) - new Date(a.create_date));
    const firstTenCat2 = category2List.slice(0, 10);
    // 创建并插入链接
    firstTenCat2.forEach(item => {
      const link = document.createElement('a');
      link.className = "nav-item active";
      link.href = `topic.html?category2=${item.id}`;
      link.innerHTML = `${item.title_short}`;
      topLeftNav.appendChild(link);
    });
  }


  // 推荐视频列表（首页）
  const lastVideoList = document.getElementById('home_video_new_list');
  if (lastVideoList) {
	const NeWvideoList2 = NeWvideoList.slice(0, 6);
    // 创建并插入链接
    NeWvideoList2.forEach(item => {
      // 创建 iframe 元素
      const iframe = document.createElement('iframe');
      iframe.width = "365";
      iframe.height = "205";
      iframe.src = item.href;
      iframe.title = "YouTube video player";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      lastVideoList.appendChild(iframe);

    });
  }


});



