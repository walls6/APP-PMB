import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  public  MahasiswaDataBaru:any = [];

  public nama_lengkap:any="";
  public jenis_kelamin:any="";
  public no_handphone:any="";
  public email:any="";
  public asal_sekolah:any="";
  public studi:any="";
  public jenjang:any="";
  public kelas:any="";
  public info:any="";

  constructor(
    public modalCtrl: ModalController, private router:Router
  ) {
    this.getData();

   }

   async getData() {
    try {
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_wall/uas/get_data.php');
      this.MahasiswaDataBaru = res.data.result;
      console.log(this.MahasiswaDataBaru);
  
      }catch(err){
        console.log(err);
      }
    }

    
    async deleteData(id:any) { 
      const fd = new FormData();
      fd.append('id', id);
      try{
        const res = await axios.post('http://localhost/uas/uas/delete_data_mahasiswa.php', fd);
        if(res.data.success == false) {
          alert('Gagal menghapus data');
        }else{
          alert('Berhasil menghapus Data');
          this.getData();
        }
      }catch(err){
        console.log(err);
      }
    }


  ngOnInit() {
  }

}
