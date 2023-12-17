describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  /* ==== Test Created with Cypress Studio ==== */
  it('PasienLama', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('dev.morclinic.id');
    /* ==== End Cypress Studio ==== */
    cy.get('#username').type('Ro01');
    cy.get('#password').type('12345678');
    cy.get('button[type=submit]').contains('Sign In').click();
    cy.get('li a span[data-original-title="Pendaftaran Pasien"]').click();
    cy.get('button[type=button]').contains('Daftar Pasien').click();
    cy.get('button[type=button]').contains('Cari Pasien').click();    
    cy.get('input#norm_pencarian').type('8').click();
    cy.get('button[type=submit]').contains('Cari').click();
    cy.get('button[type=button][data-norm=8]').click();    
    // cy.get('input#nama_pasien_tengah').type('Nama Tengah');
    // cy.get('input#nama_pasien_belakang').type('Nama Belakang');
    // cy.get('input#nik').type('33750201010011118');
    // cy.get('input#tempat_lahir').type('Dirumah');
    // cy.get('input#tanggal_lahir').type('01/01/2000');
    // cy.get('textarea#alamat').type('Nama Alamat Lengkap', {force:true});
    // cy.get('select#provinsi').select('Jawa Tengah', {force:true}).focus();
    // cy.get('select#kabupaten').select('Pekalongan', {force:true}).focus();
    // cy.get('select#kecamatan').select('Pekalongan Timur', {force:true}).focus();
    // cy.get('select#kelurahan').select('Kauman', {force:true}).focus();
    // cy.get('select#gol_darah').select('A', {force:true}).focus();
    // cy.get('select#agama').select('Islam', {force:true}).focus();
    // cy.get('select#jenis_kelamin').select('Laki-laki', {force:true}).focus();
    // cy.get('select#id_suku').select('JAWA', {force:true}).focus();
    // cy.get('select#status_perkawinan').select('Kawin', {force:true}).focus();
    // cy.get('select#id_pekerjaan').select('PNS', {force:true}).focus();
    // cy.get('select#id_pendidikan').select('S1', {force:true}).focus();
    cy.get('input[type=radio]#radio_rencana_pembayaran1').check();
    cy.get('input[type=checkbox]#status_penanggungjawab').check();
    cy.get('select#layanan').select('Pemeriksaan Umum', {force:true}).focus();
    cy.get('select#unit_umum').select('POLI UMUM', {force:true}).focus();
    cy.get('select#id_jadwal_klinik').select('Dr. dr. Bambang Satoto,Sp.Rad (K).M.Kes - Minggu(08:00:00 - 20:00:00) - POLI UMUM - 1000', {force:true}).focus();
    cy.get('button[type=submit]').contains('Daftar').click();
    cy.get('.sweet-alert button[tabindex=1]').contains('Daftar Pasien').click();
  });  
})