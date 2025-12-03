// 修改 memories 数组即可更新卡片内容和图片路径
const memories = [
  {
    date: "2023.12 圣诞前夕",
    title: "第一次一起看雪景",
    shortText: "街角的灯光落在你睫毛上，闪闪发亮。",
    longText:
      "那天风有点冷，但你的手是温暖的。我一直记得你抬头看雪花的样子，像小朋友一样可爱。",
    image: "images/memory1.jpg",
  },
  {
    date: "2024.03 某个春日下午",
    title: "第一次一起出去玩",
    shortText: "天气很普通，但因为你在变得特别。",
    longText:
      "我们在公园里慢慢走，聊了很多有趣的小事。阳光很好，你的笑容也很耀眼。",
    image: "images/memory2.jpg",
  },
  {
    date: "2024.07 仲夏夜",
    title: "一起看星星",
    shortText: "你说星星很亮，我觉得你更亮。",
    longText:
      "那天我们躺在草地上看天空，你随手指的每一颗星，我都想记下来。谢谢你陪我浪漫。",
    image: "images/memory3.jpg",
  },
  {
    date: "2024.10 某个慵懒周末",
    title: "一起做饭",
    shortText: "厨房里全是甜甜的香味和你的笑声。",
    longText:
      "虽然最后做出来的菜不太完美，但我很喜欢我们一起忙碌的样子，像把日子揉成柔软的棉花糖。",
    image: "images/memory4.jpg",
  },
];

const memoriesGrid = document.getElementById("memoriesGrid");
const modal = document.getElementById("memoryModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalDate = document.getElementById("modalDate");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const giftBox = document.getElementById("giftBox");
const hero = document.getElementById("hero");
const memoriesSection = document.getElementById("memories");

function createCard(memory) {
  const card = document.createElement("article");
  card.className = "memory-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <p class="memory-card__date">${memory.date}</p>
    <h3 class="memory-card__title">${memory.title}</h3>
    <p class="memory-card__short">${memory.shortText}</p>
  `;

  card.addEventListener("click", () => openModal(memory));
  card.addEventListener("keypress", (e) => {
    if (e.key === "Enter") openModal(memory);
  });

  return card;
}

function renderCards() {
  memoriesGrid.innerHTML = "";
  memories.forEach((memory) => {
    const card = createCard(memory);
    memoriesGrid.appendChild(card);
  });
}

function openModal(memory) {
  modalImage.src = memory.image;
  modalDate.textContent = memory.date;
  modalTitle.textContent = memory.title;
  modalText.textContent = memory.longText;
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModalEvents() {
  modalBackdrop.addEventListener("click", closeModal);
  modalClose.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function scrollToMemories() {
  hero.classList.add("fade-out");
  memoriesSection.classList.add("fade-in");
  memoriesSection.scrollIntoView({ behavior: "smooth" });
}

function setupGiftBox() {
  giftBox.addEventListener("click", scrollToMemories);
  giftBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") scrollToMemories();
  });
}

renderCards();
setupModalEvents();
setupGiftBox();
