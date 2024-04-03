describe('User should be able to sign up', () => {
  it('with valid data', () => {
    // 1. Pergi ke url
    // 2. Klik teks "ingin coba daftar"
    // 3. Validasi daftar menu terlihat
    // 4. Isi nama toko
    // 5. Isi email
    // 6. Isi password
    // 7. Klik tombol daftar
    // 8. Kembali ke Menu Login
    // 9. Masukkan email dan password yang sudah didaftarkan
    // 10. Klik tombol login
    // 11. Masuk ke Menu Dashboard
    // 12. Validasi user sudah terlihat


    cy.visit('http://kasirdemo.belajarqa.com/')
    cy.xpath('//*[@href="/register"]').click()
    cy.xpath('//*[@class="css-11jlpvc"]').should('exist')
    cy.xpath('//*[@id="name"]').type('kya123')
    cy.xpath('//*[@id="email"]').type('kya123@email.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('//button[contains(text(),"daftar")]').click()

    cy.wait(2000)

    cy.xpath('//*[@id="email"]').type('kya123@email.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('//button[contains(text(),"login")]').click()

    cy.xpath('//*[@class="chakra-container css-9rmdie"]').should('contain' , 'kya123')
  })
})