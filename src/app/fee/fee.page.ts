import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-fee',
  templateUrl: './fee.page.html',
  styleUrls: ['./fee.page.scss'],
})
export class FeePage  {

  public  MahasiswaDataBaru:any = [];

  public nama:any="";
  public status:any="";
  public jumlah_fee:any="";
  

  constructor(
    public modalCtrl: ModalController, private router:Router
  ) {
    this.getData();

   }

   back(){
    this.router.navigate(['/tabs/tab2'])
  }

   async getData() {
    try {
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_wall/uas/get_fee_data.php');
      this.MahasiswaDataBaru = res.data.result;
      console.log(this.MahasiswaDataBaru);
  
      }catch(err){
        console.log(err);
      }
    }

    
    // async deleteData(id:any) { 
    //   const fd = new FormData();
    //   fd.append('id', id);
    //   try{
    //     const res = await axios.post('http://localhost/uas/uas/delete_data_mahasiswa.php', fd);
    //     if(res.data.success == false) {
    //       alert('Gagal menghapus data');
    //     }else{
    //       alert('Berhasil menghapus Data');
    //       this.getData();
    //     }
    //   }catch(err){
     
    }


 



