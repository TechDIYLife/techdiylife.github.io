const category1List = [
  { id: "c01", title_full: "AI相关动态，闲谈", title_short:"" },
  { id: "c02", title_full: "大模型技术", title_short:"" },
  { id: "c03", title_full: "IT技术与日常应用", title_short:"" },
  { id: "c04", title_full: "AI与游戏", title_short:"" },
];

const category2List = [
  { id: "t01", title_full: "专题：大模型训练技术快速入门", title_short: "大模型训练" },
  { id: "t02", title_full: "专题：ChatGPT插件开发", title_short: "ChatGPT插件" },
  { id: "t03", title_full: "专题：OpenAI API应用-复现Gemini演示视频", title_short: "复现Gemini演示视频" },
  { id: "t04", title_full: "专题：AI打爆贪吃蛇", title_short: "AI贪吃蛇" },
  { id: "t05", title_full: "专题：Unity ML-Agents 游戏深度学习编程", title_short: "ML-Agents游戏编程" },
  //{ id: "t06", title_full: "专题：AI劝退偷吃猫", title_short: "AI劝退偷吃猫" },
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

  { id: "0015", category1: "c02", category2: "t03", create_date: "2023.12.13", title_short: "第1章：语音对话部分：识别，对话，合成", title_full: "第1章：语音对话部分：识别，对话，合成", href: "202312/231213-Challenge-hands-free-1.html", video_href: "" },
  { id: "0016", category1: "c02", category2: "t03", create_date: "2023.12.13", title_short: "快速入门 OpenAI API 手册", title_full: "快速入门 OpenAI API 手册", href: "202312/231213-ChatGPT-API.html", video_href: "" },
  { id: "0017", category1: "c03", category2: "", create_date: "2023.12.22", title_short: "三步搞定 VMWare Windows 11 虚拟机", title_full: "三步搞定 VMWare Windows 11 虚拟机", href: "202312/231221-VMWare.html", video_href: "" },
  { id: "0018", category1: "c03", category2: "t03", create_date: "2023.12.29", title_short: "PyQt5图形界面GUI开发", title_full: "Python 图形界面GUI开发库 PYQT5 快速入门", href: "202312/231224-Python-GUI-pyqt5.html", video_href: "" },
  { id: "0019", category1: "c02", category2: "t03", create_date: "2023.12.30", title_short: "模糊图像检测", title_full: "OpenCV模糊图像检测", href: "202312/231227-Blurry.html", video_href: "" },

];


const NeWvideoList = [
  
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
  if (filteredList.length > 0) {

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
      link.innerHTML = `&bull; ${item.title_short} <div class="icon-item-tag">${item.create_date}</div>`;
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
      link.innerHTML = `&bull; ${item.title_short} <div class="icon-item-tag">${item.create_date}</div>`;
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


