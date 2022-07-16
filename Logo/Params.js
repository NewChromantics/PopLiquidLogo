const Params = {};
export default Params;

Params.ChromaOffsetk = 2;

Params.BackgroundChequerRepeat = 5;
Params.BackgroundRingRepeat = 100;
Params.BackgroundTimeScalek = 0.3 * 1000;

Params.ParticleRadiusk = 45;
Params.WorldScalek = 1000;
Params.DebugSdf = false;
Params.DebugSdfSample = false;


Params.RepelPosition = [0.0,0.0];
Params.RepelRadiusk = 0.07 * 1000;
Params.RepelForceMink = 340;
Params.RepelForceMaxk = 560;
Params.ForceNoiseMink = 600;
Params.ForceNoiseMaxk = 900;
Params.GravityForcePowerk = 0.0 * 1000;
Params.DragForcePowerk = 0.20 * 1000;
Params.SpringForcePowerk = 0.4 * 1000;

Params.LiquidDensityk = 0.5*1000;
Params.SpecularColour = [255, 255, 255].map( x=>x/255);
Params.FresnelColour = [210, 242, 252].map( x=>x/255);
Params.RefractionIncidenceFactorialised = true;
Params.RefractionIncidencek = 1.05*1000;
Params.FresnelFactork = 6.1 * 1000;
Params.LightX = -5.2 * 100;
Params.LightY = 7.8 * 100;
Params.LightZ = 6.5 * 100;
Params.SdfParticleDistancePow = 11;
Params.RenderParticleDistancePow = 55;
Params.SpecularMinDotk = 700;
Params.BlurSigmak = 6400;
Params.SampleWeightSigma = 2;
Params.NormalSampleStepk = 6;
Params.SdfMinRadiusk = 0;
Params.SdfMaxRadiusk = 830;
Params.SdfClipRadiusk = 464;

Params.DebugPhysics = false;
Params.BackgroundColourA = [227, 223, 211].map( x=>x/255);
Params.BackgroundColourB = [102, 100, 93].map( x=>x/255);

//Object.assign( Params, Pop.GetExeArguments() );

export const ParamsMeta = {};

ParamsMeta.RepelRadiusk = {min:0,max:1000};
ParamsMeta.RepelForceMink = {min:0,max:10*1000};
ParamsMeta.RepelForceMaxk = {min:0,max:10*1000};
ParamsMeta.ForceNoiseMink = {min:0,max:1000};
ParamsMeta.ForceNoiseMaxk = {min:0,max:1000};
ParamsMeta.GravityForcePowerk = {min:0,max:1000};
ParamsMeta.DragForcePowerk = {min:0,max:1000};
ParamsMeta.SpringForcePowerk = {min:0,max:10*1000};
ParamsMeta.LiquidDensityk = {min:0,max:1000};
ParamsMeta.FresnelFactork = {min:0,max:10*1000};
ParamsMeta.RefractionIncidencek = {min:0,max:3000};
ParamsMeta.BackgroundChequerRepeat = {min:1,max:50};
ParamsMeta.BackgroundRingRepeat = {min:1,max:800};
ParamsMeta.LightX = {min:-900,max:900};
ParamsMeta.LightY = {min:-900,max:900};
ParamsMeta.LightZ = {min:-900,max:900};
ParamsMeta.SdfParticleDistancePow = {min:1,max:100};
ParamsMeta.RenderParticleDistancePow = {min:1,max:100};
ParamsMeta.SpecularMinDotk = {min:0,max:1*1000};
ParamsMeta.BlurSigmak = {min:1,max:12*1000};
ParamsMeta.SampleWeightSigma = {min:0,max:5};
ParamsMeta.NormalSampleStepk = {min:0,max:10};
ParamsMeta.SdfMinRadiusk = {min:0,max:1000};
ParamsMeta.SdfMaxRadiusk = {min:0,max:1000};
ParamsMeta.SdfClipRadiusk = {min:0,max:1000};
ParamsMeta.ParticleRadiusk = {min:0,max:100};
ParamsMeta.WorldScalek = {min:0,max:1000};
ParamsMeta.BackgroundTimeScalek = {min:0,max:1000};

ParamsMeta.ChromaOffsetk = {min:-10,max:10};

