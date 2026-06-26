describe('DuckDuckGo Search', () => {
  it('Search and validate results', async () => {
    const searchTerm = 'Playwright automation';

    await browser.url('https://duckduckgo.com/');

    const searchInput = await $('#searchbox_input');
    await searchInput.setValue(searchTerm);
    await browser.keys('Enter');

    await browser.pause(3000);

    const currentUrl = await browser.getUrl();
    expect(currentUrl.toLowerCase()).toContain(searchTerm.replace(/\s+/g, '+').toLowerCase());
  });
});
