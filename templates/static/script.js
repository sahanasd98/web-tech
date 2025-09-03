// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const balanceElement = document.querySelector("h2");
    const flashMessages = document.querySelectorAll(".flash");
    const transactionList = document.querySelector("ul");

    // Animate balance (typing effect)
    if (balanceElement) {
        let text = balanceElement.innerText;
        balanceElement.innerText = "";
        let i = 0;
        let typing = setInterval(() => {
            if (i < text.length) {
                balanceElement.innerText += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    }

    // Auto-hide flash messages after 3s
    flashMessages.forEach(msg => {
        setTimeout(() => {
            msg.style.opacity = "0";
        }, 3000);
    });

    // Add animation to new transactions
    if (transactionList) {
        const items = transactionList.querySelectorAll("li");
        items.forEach((item, index) => {
            item.style.opacity = "0";
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transition = "opacity 0.5s ease-in";
            }, index * 200);
        });
    }
});
