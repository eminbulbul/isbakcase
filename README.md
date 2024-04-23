### Proje Vercel ile deploy edilmiştir.
### Proje Linki : https://isbakcase.vercel.app/

## Local'e indirmek ve projeyi başlatmak


Projeyi ilgili repodan localinize indirebilirsiniz. Terminale yazacağınız :
### npm install 
&emsp;ve 
### npm start 
komutları ile projeyi indirebilirsiniz. Projemi değerlendirdiğiniz için şimdiden teşekkür ederim.

## Proje Klasör Yapısı

src  
├───assets  : proje için kullanılan media dosyaları bu klasör altındadır.

└────components  
│&emsp;&emsp;&emsp;&emsp;├── TrafficLight: Arabalar ve yayalar için kullanılan trafik lambaları için oluşturulmuş componenttir.  
├───pages  
│&emsp;&emsp;&emsp;&emsp;├────Home: Trafik lambaları uygulamasının bulunduğu sayfadır.     
│&emsp;&emsp;&emsp;&emsp;├── Login: Karşılama sayfasıdır. Bu sayfadan uygulamanın bulunduğu sayfaya gidilebilir.  
│&emsp;&emsp;&emsp;&emsp;├── Page404: Proje içinde bulunmayan herhangi bir url veya adrese gidildiğinde çalışan sayfadır.   
│   
├───router    
│&emsp;&emsp;&emsp;&emsp;├── AppRouter: Sayfaların router yapısının oluşturulduğu sayfadır. react-router-dom kullanılarak oluşturulmuştur.  
└───data  
&emsp;&emsp;&emsp;&emsp;└── User: Projede istenen trafik ışıkları bilgilerini içeren dosyadır.    
