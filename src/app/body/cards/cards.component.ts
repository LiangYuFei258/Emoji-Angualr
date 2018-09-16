import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  images: Array<Image>;

  constructor() {
  }

  ngOnInit() {
    this.images = new Array<Image>();
    this.images.push(new Image(1, 'https://ws4.sinaimg.cn/bmiddle/9150e4e5ly1fv8qi05psnj20bw09idg3.jpg', '1'));
    this.images.push(new Image(1, 'https://ws4.sinaimg.cn/bmiddle/9150e4e5ly1fv8qhvstpug20500661kz.gif', '1'));
    this.images.push(new Image(1, 'https://ws2.sinaimg.cn/bmiddle/9150e4e5gy1fv8qhyf2xdj20h20eita3.jpg', '1'));
    this.images.push(new Image(1, 'https://ws3.sinaimg.cn/bmiddle/9150e4e5ly1fv8qpmzrbhg205k05kdm8.gif', '1'));
    this.images.push(new Image(1, 'https://ws2.sinaimg.cn/bmiddle/9150e4e5gy1fv9gu4jvf1j20k00jtabs.jpg', '1'));
    this.images.push(new Image(1, 'https://ws4.sinaimg.cn/bmiddle/9150e4e5ly1fv8qus5ksjj20bm08o0tc.jpg', '1'));
    this.images.push(new Image(1, 'https://ws3.sinaimg.cn/bmiddle/9150e4e5gy1fv9gwdkgv0j20fk0fkgmb.jpg', '1'));
    this.images.push(new Image(1, 'https://ws3.sinaimg.cn/bmiddle/9150e4e5gy1fv9gymd4sej204k05ia9v.jpg', '1'));
    this.images.push(new Image(1, 'https://ws3.sinaimg.cn/bmiddle/9150e4e5gy1fv9h9nva40g206o06o0tb.gif', '1'));
    this.images.push(new Image(1, 'https://ws4.sinaimg.cn/bmiddle/9150e4e5gy1fv9hbjlatlj205i05ijr9.jpg', '1'));
    this.images.push(new Image(1, 'https://ws1.sinaimg.cn/bmiddle/9150e4e5gy1fv9hetz7s6j205305imx0.jpg', '1'));
    this.images.push(new Image(1, 'https://ws4.sinaimg.cn/bmiddle/9150e4e5gy1fv9hcrqfl5j20b40b43yl.jpg', '1'));
    this.images.push(new Image(1, 'https://ws3.sinaimg.cn/bmiddle/9150e4e5gy1fv9hci5hrzj20k00k0wfp.jpg', '1'));
    this.images.push(new Image(1, 'https://ws4.sinaimg.cn/bmiddle/9150e4e5gy1fv8quqdmfij20dn0hkt9p.jpg', '1'));
    this.images.push(new Image(1, 'https://ws1.sinaimg.cn/bmiddle/9150e4e5gy1fv8qtgcgb9j20dd0fzdgq.jpg', '1'));
    this.images.push(new Image(1, 'https://ws1.sinaimg.cn/bmiddle/9150e4e5ly1fv8qteg5urj204h04tt8m.jpg', '1'));
    this.images.push(new Image(1, 'https://ws3.sinaimg.cn/bmiddle/9150e4e5ly1fv8qwp6d5zj20h50m8myt.jpg', '1'));
    this.images.push(new Image(1, 'https://ws3.sinaimg.cn/bmiddle/9150e4e5gy1fv8rejfttog204602sweu.gif', '1'));
    this.images.push(new Image(1, 'https://ws1.sinaimg.cn/bmiddle/9150e4e5ly1fv72va2udbg208w08w3yv.gif', '1'));
    this.images.push(new Image(1, 'https://ws4.sinaimg.cn/bmiddle/9150e4e5ly1fv72x5iiing207i07igng.gif', '1'));
  }

}

export class Image {
  constructor(
    public ImageId: Number,
    public ImageUrl: String,
    public ImageTitle: String
  ) { }
}
