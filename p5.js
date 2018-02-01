int blackwhite = 1;
boolean forward = true;

void setup()
{
  size(600,600);
  noStroke();
  textSize(32);
}

void draw()
{
    fill(blackwhite);
    ellipse(width/2, height/2, width, height);
    fill(#CC5500);
    text(str(blackwhite),width/2,height/2);

  if (blackwhite == 256 || blackwhite == 0) forward = !forward;

  if (forward) blackwhite++; else blackwhite--;
}
