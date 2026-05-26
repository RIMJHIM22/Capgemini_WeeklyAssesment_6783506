import { Page, Locator } from "@playwright/test";

class HomePage {

    private page: Page;
    private adviceMenu: Locator;
    private supportMenu: Locator;

    constructor(page: Page) {

        this.page = page;

        this.adviceMenu = page.getByText("MB Advice", { exact: true });

        this.supportMenu = page.getByText("Help", { exact: true });
    }

    // Common popup handler
    async openNewTab(menuItem: string) {

        const popupPromise = this.page.waitForEvent("popup");

        await this.page.getByText(menuItem).click();

        const newPage = await popupPromise;

        await newPage.waitForLoadState();

        return newPage;
    }

    // Open PropWorth page
    async openPropWorth() {

        await this.adviceMenu.hover();

        return await this.openNewTab("PropWorth");
    }

    // Open Area Converter page
    async openAreaConverter() {

        await this.adviceMenu.hover();

        return await this.openNewTab("Area Converter");
    }

    // Open Chat Support
    async openChatSupport() {

        await this.supportMenu.hover();

        return await this.openNewTab("Chat with Us");
    }
}

export default HomePage;