function attachClickEvents() {
          const items = document.querySelectorAll("#menuList li");
          const desc = document.getElementById("menuDescription");
          items.forEach((item) => {
            item.addEventListener("click", () => {
              const name = item.textContent;
              let message = "";
        
              if (name.includes("☕ ブレンドコーヒー")) {
                message = "こだわりの豆を使った香り高いブレンドコーヒーです。";
              } else if (name.includes("🍰 手作りチーズケーキ")) {
                message = "甘さ控えめでコーヒーと相性抜群の手作りチーズケーキ。";
              } else if (name.includes("🥪 こだわりのサンドイッチ")) {
                message = "旬の野菜と自家製パンのサンドイッチ。";
              } else if (name.includes("🍛 ほっこりカレーライス")) {
                message = "スパイス香るまろやかカレー。ランチにぴったり！";
              } else if (name.includes("🍮 自家製プリン")) {
                message = "とろける食感が人気の自家製プリン。";
              } else if (name.includes("🥤 季節のスムージー")) {
                message = "季節のフルーツを使ったさっぱりスムージー。";
              }
        
              desc.textContent = message;
            });
          });
        }
        
        function attachFavoriteEvents() {
          const favButtons = document.querySelectorAll(".favorite");
          favButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              if (btn.textContent == "♡") {
                btn.textContent = "♥";
                btn.classList.add("active");
              } else {
                btn.textContent = "♡";
                btn.classList.remove("active");
              }
            });
          });
        }
        
        document.getElementById("recommendBtn").addEventListener("click", function () {
          const menuList = document.getElementById("menuList");
          menuList.innerHTML = 
          `<li>🍛 ほっこりカレーライス <button class="favorite">♡</button></li>
          <li>🍮 自家製プリン <button class="favorite">♡</button></li>
          <li>🥤 季節のスムージー <button class="favorite">♡</button></li>`;
        
          attachClickEvents();
          attachFavoriteEvents();
        });
        
        document.getElementById("toggleDarkMode").addEventListener("click", () => {
          document.body.classList.toggle("dark-mode");
        });
        
        attachClickEvents();
        attachFavoriteEvents();