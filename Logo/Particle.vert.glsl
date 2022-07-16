precision highp float;

attribute float ParticleIndex;
attribute vec2 LocalUv;

uniform sampler2D ParticlePositions;
uniform int ParticlePositionsWidth;
uniform int ParticlePositionsHeight;
//uniform sampler2D Velocitys;

uniform float WorldScalek;
#define WorldScale	(WorldScalek/1000.0)

varying vec2 FragUv;
varying vec2 FragWorldPosition;
varying vec2 FragParticlePosition;
varying float WorldParticleRadius;
uniform float ParticleRadiusk;
#define MinParticleRadius	(0.0)
#define MaxParticleRadius	(ParticleRadiusk/1000.0)

vec2 GetParticlePosition(out float Radius)
{
	float u = mod( float(ParticleIndex), float(ParticlePositionsWidth) );
	float v = floor( float(ParticleIndex) / float(ParticlePositionsWidth) );
	
	u /= float(ParticlePositionsWidth);
	v /= float(ParticlePositionsHeight);
	vec4 ParticleData = texture2D( ParticlePositions, vec2(u,v) );

	Radius = ParticleData.z;
	
	return ParticleData.xy;
}

void main()
{
	float LocalParticleRadius = 0.0;
	vec2 ParticlePosition = GetParticlePosition(LocalParticleRadius) * (WorldScale);

	WorldParticleRadius = mix( MinParticleRadius, MaxParticleRadius, LocalParticleRadius );
	
	vec2 LocalPosition = mix( vec2(-1), vec2(1), LocalUv );
	vec2 VertexPosition = LocalPosition * WorldParticleRadius;
	vec2 WorldPos = ParticlePosition + VertexPosition;
	float z = 0.0;
	float w = 1.0;
	
	//	move 0..1 to viewport space
	vec2 ProjectionPos = mix( vec2(-1), vec2(1), WorldPos );
	gl_Position = vec4( ProjectionPos, z, w );

	FragUv = LocalUv;
	FragWorldPosition = WorldPos;
	FragParticlePosition = ParticlePosition;
}

