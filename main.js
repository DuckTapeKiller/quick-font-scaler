const { Plugin } = require('obsidian');

module.exports = class QuickFontScaller extends Plugin {
    async onload() {
        this.statusBarItem = this.addStatusBarItem();
        this.statusBarItem.addClass('quick-font-scaler-container');

        const minusBtn = this.statusBarItem.createEl('button', { text: '-', cls: 'qfs-btn' });
        minusBtn.onclick = () => this.adjustFontSize(-1);

        const plusBtn = this.statusBarItem.createEl('button', { text: '+', cls: 'qfs-btn' });
        plusBtn.onclick = () => this.adjustFontSize(1);
        
        this.addStyle();
    }

    adjustFontSize(change) {
        let currentSize = this.app.vault.getConfig('baseFontSize') || 16;
        let newSize = currentSize + change;
        if (newSize < 10) newSize = 10;
        if (newSize > 30) newSize = 30;
        this.app.vault.setConfig('baseFontSize', newSize);
        this.app.updateFontSize();
    }

    addStyle() {
        const css = `
            .quick-font-scaler-container { display: flex; align-items: center; gap: 0; padding: 0 5px; }
            .qfs-btn { 
                background: transparent; 
                border: 1px solid var(--text-muted); 
                color: var(--text-muted); 
                font-weight: bold; 
                cursor: pointer; 
                width: 20px;       
                height: 20px;      
                display: flex; 
                justify-content: center; 
                align-items: center; 
                padding: 0; 
                line-height: 0; 
                border-radius: 0; 
                font-size: 14px;
            }
            .qfs-btn:first-child { border-right: none; }
            .qfs-btn:hover { background-color: var(--interactive-hover); color: var(--text-normal); }
        `;
        const style = document.createElement('style');
        style.innerText = css;
        document.head.appendChild(style);

        this.register(() => style.remove());
    }
};