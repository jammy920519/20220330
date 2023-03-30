
let points  =  [[1,3], [3, 4], [8, 5],[9,7],[9,15],[10,19],[11,12],[13,23],[15,24],[14,22],[13,19],[15,15], [16, 12], [17, 7],[18,5],[22,4],[25,3],[22,2],[17,1],[9,1],[3,2],[1,3]]; //list資料，

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
	createCanvas(windowWidth, windowHeight);
	background(100);
	
	ctx = canvas.getContext('2d');
	ctx.lineWidth = 10;
	ctx.lineCap = 'round'
	//------
	gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue')
	gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange')
	gradientLine(ctx, 520, 70, 500, 440, 'lightblue', 'lime')
	
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 30;
			

		

}
}
	}
function draw() {
	
  background(255);
  // scale(50)
	

		let scaleVal = map(mouseX, 0, width, 0.5, 2); //根據滑鼠的位置計算放大縮小的比例
  scale(scaleVal); //根據計算出的比例進行放大縮小
	
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
	textSize(30)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("教育科技學系",-50,0)  //顯示文字
  scale(1, -1);  //上下翻轉
	


	
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
		
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
	 
	
  const gradient = ctx.createLinearGradient(x1, y1, x1, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}