gdjs.StartscreenCode = {};
gdjs.StartscreenCode.GDBackgroundObjects1= [];
gdjs.StartscreenCode.GDBackgroundObjects2= [];
gdjs.StartscreenCode.GDBackgroundObjects3= [];
gdjs.StartscreenCode.GDExplanationObjects1= [];
gdjs.StartscreenCode.GDExplanationObjects2= [];
gdjs.StartscreenCode.GDExplanationObjects3= [];
gdjs.StartscreenCode.GDTitleObjects1= [];
gdjs.StartscreenCode.GDTitleObjects2= [];
gdjs.StartscreenCode.GDTitleObjects3= [];
gdjs.StartscreenCode.GDControlsObjects1= [];
gdjs.StartscreenCode.GDControlsObjects2= [];
gdjs.StartscreenCode.GDControlsObjects3= [];
gdjs.StartscreenCode.GDCheatsObjects1= [];
gdjs.StartscreenCode.GDCheatsObjects2= [];
gdjs.StartscreenCode.GDCheatsObjects3= [];
gdjs.StartscreenCode.GDNewObjectObjects1= [];
gdjs.StartscreenCode.GDNewObjectObjects2= [];
gdjs.StartscreenCode.GDNewObjectObjects3= [];
gdjs.StartscreenCode.GDNewObject2Objects1= [];
gdjs.StartscreenCode.GDNewObject2Objects2= [];
gdjs.StartscreenCode.GDNewObject2Objects3= [];
gdjs.StartscreenCode.GDNewObject3Objects1= [];
gdjs.StartscreenCode.GDNewObject3Objects2= [];
gdjs.StartscreenCode.GDNewObject3Objects3= [];
gdjs.StartscreenCode.GDAttributionsObjects1= [];
gdjs.StartscreenCode.GDAttributionsObjects2= [];
gdjs.StartscreenCode.GDAttributionsObjects3= [];

gdjs.StartscreenCode.conditionTrue_0 = {val:false};
gdjs.StartscreenCode.condition0IsTrue_0 = {val:false};
gdjs.StartscreenCode.condition1IsTrue_0 = {val:false};
gdjs.StartscreenCode.condition2IsTrue_0 = {val:false};
gdjs.StartscreenCode.conditionTrue_1 = {val:false};
gdjs.StartscreenCode.condition0IsTrue_1 = {val:false};
gdjs.StartscreenCode.condition1IsTrue_1 = {val:false};
gdjs.StartscreenCode.condition2IsTrue_1 = {val:false};


gdjs.StartscreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartscreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartscreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.StartscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 10);
}}

}


{


gdjs.StartscreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartscreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.StartscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

}


};gdjs.StartscreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartscreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.StartscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.StartscreenCode.condition0IsTrue_0.val = false;
gdjs.StartscreenCode.condition1IsTrue_0.val = false;
{
gdjs.StartscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.StartscreenCode.condition0IsTrue_0.val ) {
{
{gdjs.StartscreenCode.conditionTrue_1 = gdjs.StartscreenCode.condition1IsTrue_0;
gdjs.StartscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10822836);
}
}}
if (gdjs.StartscreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.StartscreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.StartscreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Music\\Light-Years_V001_Looping.mp3", 1, true, 10, 1);
}}

}


};

gdjs.StartscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartscreenCode.GDBackgroundObjects1.length = 0;
gdjs.StartscreenCode.GDBackgroundObjects2.length = 0;
gdjs.StartscreenCode.GDBackgroundObjects3.length = 0;
gdjs.StartscreenCode.GDExplanationObjects1.length = 0;
gdjs.StartscreenCode.GDExplanationObjects2.length = 0;
gdjs.StartscreenCode.GDExplanationObjects3.length = 0;
gdjs.StartscreenCode.GDTitleObjects1.length = 0;
gdjs.StartscreenCode.GDTitleObjects2.length = 0;
gdjs.StartscreenCode.GDTitleObjects3.length = 0;
gdjs.StartscreenCode.GDControlsObjects1.length = 0;
gdjs.StartscreenCode.GDControlsObjects2.length = 0;
gdjs.StartscreenCode.GDControlsObjects3.length = 0;
gdjs.StartscreenCode.GDCheatsObjects1.length = 0;
gdjs.StartscreenCode.GDCheatsObjects2.length = 0;
gdjs.StartscreenCode.GDCheatsObjects3.length = 0;
gdjs.StartscreenCode.GDNewObjectObjects1.length = 0;
gdjs.StartscreenCode.GDNewObjectObjects2.length = 0;
gdjs.StartscreenCode.GDNewObjectObjects3.length = 0;
gdjs.StartscreenCode.GDNewObject2Objects1.length = 0;
gdjs.StartscreenCode.GDNewObject2Objects2.length = 0;
gdjs.StartscreenCode.GDNewObject2Objects3.length = 0;
gdjs.StartscreenCode.GDNewObject3Objects1.length = 0;
gdjs.StartscreenCode.GDNewObject3Objects2.length = 0;
gdjs.StartscreenCode.GDNewObject3Objects3.length = 0;
gdjs.StartscreenCode.GDAttributionsObjects1.length = 0;
gdjs.StartscreenCode.GDAttributionsObjects2.length = 0;
gdjs.StartscreenCode.GDAttributionsObjects3.length = 0;

gdjs.StartscreenCode.eventsList1(runtimeScene);
return;

}

gdjs['StartscreenCode'] = gdjs.StartscreenCode;
