import { Locator, Page } from "@playwright/test";

class FlatBooking {

    private page: Page;
    private cityMenu: Locator;

    constructor(page: Page) {

        this.page = page;

        this.cityMenu = page.locator(
            '//a[@class="mb-header__main__link js-menu-link"]'
        );
    }

    // Select city location
    async selectCity() {

        await this.cityMenu.hover();

        await this.page.getByText("Kota").click();
    }

    // Open rental property details
    async openRentalProperty() {

        await this.page.locator("#tabRENT").click();

        const popupPromise = this.page.waitForEvent("popup");

        await this.page
            .locator("//div[@class='mb-home__owner-prop__card--graphic']")
            .click();

        const propertyPage = await popupPromise;

        return propertyPage;
    }

    // Download brochure PDF
    async downloadBrochure(propertyPage: Page) {

        await propertyPage.getByText("Download Brochure").click();

        const downloadPromise = propertyPage.waitForEvent("download");

        await propertyPage.getByText("No").click();

        const brochureFile = await downloadPromise;

        await brochureFile.saveAs(
            `downloads/${brochureFile.suggestedFilename()}`
        );
    }

    // Check property availability
    async verifyAvailability() {

        await this.page
            .getByText("Check Availability")
            .first()
            .click();
    }
}

export default FlatBooking;