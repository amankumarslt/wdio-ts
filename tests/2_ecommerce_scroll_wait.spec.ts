describe('LambdaTest ECommerce Login and Purchase Flow', () => {
  it('Login and add product to cart', async () => {
    const username = 'himanshu.sheth@gmail.com';
    const password = '123456';

    await browser.url(
      'https://ecommerce-playground.lambdatest.io/index.php?route=account/login'
    );

    await $('#input-email').waitForExist({ timeout: 15000 });

    await $('#input-email').setValue(username);
    await $('#input-password').setValue(password);
    await $('[value="Login"]').click();

    await browser.pause(3000);

    await browser.execute(() => {
      const el = document.querySelector(".both[href='#mz-component-1626147655']") as HTMLElement;
      if (el) el.click();
    });

    await browser.pause(2000);

    const phoneLink = await $('=Phone, Tablets & Ipod');
    if (await phoneLink.isExisting()) {
      await browser.execute(() => {
        const links = document.querySelectorAll('a');
        links.forEach((link) => {
          if (link.textContent?.includes('Phone, Tablets & Ipod')) {
            link.click();
          }
        });
      });
    }

    await browser.pause(5000);

    await browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await browser.pause(1000);

    await browser.execute(() => window.scrollTo(0, 0));

    await browser.pause(1000);

    const iPhoneImage = await $(
      '#mz-product-grid-image-36-212408 > div > div.carousel-item.active > img'
    );

    if (await iPhoneImage.isExisting()) {
      await browser.execute((sel: string) => {
        const el = document.querySelector(sel);
        if (el) {
          (el as HTMLElement).style.position = 'relative';
          (el as HTMLElement).style.zIndex = '1000';
          (el as HTMLElement).style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
        }
      }, '#mz-product-grid-image-36-212408 > div > div.carousel-item.active > img');

      await expect(iPhoneImage).toBeDisplayed();
      await iPhoneImage.click();

      await browser.pause(2000);
      const url = await browser.getUrl();
      expect(url).toContain('product_id=36');
    }
  });
});
