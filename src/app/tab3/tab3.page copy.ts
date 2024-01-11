import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page 
{

  public asal_sekolah:any = "" ;
  public nama:any = "" ;
  public no_hanphone:any = "";
  public jenis_kelamin:any = "" ;
  public email:any = "" ;
  public jurusan:any = "" ;
  public jenjang:any = "" ;
  public kelas:any = "";

  constructor(
    public toastCtrl: ToastController,
  ) {}


  
  async addData()
   {
    const formData = new FormData();
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('nama', this.nama);
    formData.append('no_hanphone', this.no_hanphone);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('email', this.email);
    formData.append('jurusan', this.jurusan);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
   
    console.log(formData);


    try{
      const res = await axios.post('http://localhost/uas/uas/add_data.php', formData)
      console.log(res.data);

      if(res.data.error==false) {
        const toast = await this.toastCtrl.create({
          message : 'Data Berhasil Ditambahkan',
          duration : 2000
        });
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message : 'Data Gagal Dsimpan',
          duration : 2000
        });
        toast.present();
      }
      
    }catch(err)
    {
      console.log(err);
    }
  }
}
