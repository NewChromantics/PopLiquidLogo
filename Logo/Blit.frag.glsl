precision highp float;

uniform sampler2D Texture;
varying vec2 uv;

uniform float ProjectionAspectRatio;

void main()
{
	gl_FragColor = texture( Texture, uv );
}

