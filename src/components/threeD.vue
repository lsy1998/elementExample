
<template>
  <div style="width:800px;height:400px;background-color:red;">
hhhdddd
  </div>
</template>
<script type="text/javascript" src="https://unpkg.com/@babel/polyfill@7.0.0/dist/polyfill.js"></script>
<script type="text/javascript" src="https://unpkg.com/vtk.js"></script>
<!-- <script src="MyWebApp.js" type="text/javascript"></script> -->
<script>
// // import vtk from 'vtk.js'
// // var actor = vtk.Rendering.Core.vtkActor.newInstance();
// // var fullScreenRenderer = vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance();
// // var mapper = vtk.Rendering.Core.vtkMapper.newInstance();
// // var reader = vtk.IO.Legacy.vtkPolyDataReader.newInstance();

// import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
// // import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
// // import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
// // import vtkPolyDataReader from 'vtk.js/Sources/IO/Legacy/PolyDataReader';
// const fileName = '../assets/image/sphere.vtk'; // 'uh60.vtk'; // 'luggaBody.vtk';

// // ----------------------------------------------------------------------------
// // Standard rendering code setup
// // ----------------------------------------------------------------------------

// // const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance();
// const renderer = fullScreenRenderer.getRenderer();
// const renderWindow = fullScreenRenderer.getRenderWindow();

// const resetCamera = renderer.resetCamera;
// const render = renderWindow.render;

// // ----------------------------------------------------------------------------
// // Example code
// // ----------------------------------------------------------------------------

// // const reader = vtkPolyDataReader.newInstance();
// reader.setUrl(`${fileName}`).then(() => {
//   const polydata = reader.getOutputData(0);
//   // const mapper = vtkMapper.newInstance();
//   // const actor = vtkActor.newInstance();

//   actor.setMapper(mapper);
//   mapper.setInputData(polydata);

//   renderer.addActor(actor);

//   resetCamera();
//   render();
// });

// // -----------------------------------------------------------
// // Make some variables global so that you can inspect and
// // modify objects in your browser's developer console:
// // -----------------------------------------------------------

// global.reader = reader;
// global.fullScreenRenderer = fullScreenRenderer;

export default {
  name: 'threeD',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

@import '../assets/iconfont/iconfont.css'

</style>
