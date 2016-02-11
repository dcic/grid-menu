import Drop from 'tether-drop';

const dropContent = `
  <div class="drop-inner">
    <h3>BD2K-LINCS DCIC Tools</h3>
    <a href="http://amp.pharm.mssm.edu/LDR" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/LDR.png');"></span>
        <span class="drop-grid-app-title">LDR</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/L1000CDS2" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/l1000cds2.png')"></span>
        <span class="drop-grid-app-title">L1000CDS2</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/Slicr" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/slicr.png')"></span>
        <span class="drop-grid-app-title">Slicr</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/Enrichr" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/enrichr.png')"></span>
        <span class="drop-grid-app-title">Enrichr</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/g2e" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/Geo2Enrichr.png')"></span>
        <span class="drop-grid-app-title">GEO2Enrichr</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/Harmonizome" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/harmonizome.png')"></span>
        <span class="drop-grid-app-title">Harmonizome</span>
      </div>
    </a>
    <a href="http://dev3.ccs.miami.edu:8080/dcic-portal/" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/portal.png')"></span>
        <span class="drop-grid-app-title">LINCS Data Portal</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/p100mosaic" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/mosaic_by_freepik.jpg')"></span>
        <span class="drop-grid-app-title">P100/GCP Mosaic</span>
      </div>
    </a>
    <a href="http://www.maayanlab.net/LINCS/DCB/" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/drug-cell-line-browser.png')"></span>
        <span class="drop-grid-app-title">Drug/Cell-line Browser</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/CREEDS" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/CREEDS.png')"></span>
        <span class="drop-grid-app-title">CREEDS</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/PAEA" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/paea.png')"></span>
        <span class="drop-grid-app-title">PAEA</span>
      </div>
    </a>
    <a href="http://www.maayanlab.net/N2C/" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/network2canvas.png')"></span>
        <span class="drop-grid-app-title">Network2Canvas</span>
      </div>
    </a>
    <a href="http://www.lincscloud.org/" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/cmap2.jpg')"></span>
        <span class="drop-grid-app-title">Lincscloud</span>
      </div>
    </a>
    <a href="http://iLINCS.org" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/i-lincs.png')"></span>
        <span class="drop-grid-app-title">iLINCS</span>
      </div>
    </a>
    <a href="http://amp.pharm.mssm.edu/GEN3VA" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/gen3va_logo.png')"></span>
        <span class="drop-grid-app-title">GEN3VA</span>
      </div>
    </a>
    <a href="http://piLINCS.org" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/pilincs.png')"></span>
        <span class="drop-grid-app-title">piLINCS</span>
      </div>
    </a>
    <a href="http://www.lincsproject.org/data/data-releases/" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/docent-grid.png')"></span>
        <span class="drop-grid-app-title">Docent</span>
      </div>
    </a>
    <a href="http://life.ccs.miami.edu/life/" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/life.png')"></span>
        <span class="drop-grid-app-title">LIFE</span>
      </div>
    </a>
    <a href="http://www.maayanlab.net/LINCS/LCB/" target="_blank">
      <div class="drop-grid-item">
        <span class="drop-grid-app-image"
          style="background-image: url('http://lincs-dcic.org/dev/images/apps/lincs-canvas-browser.png')"></span>
        <span class="drop-grid-app-title">LINCS Canvas Browser</span>
      </div>
    </a>
  </div>
`;

const dropInstance = new Drop({
  target: document.querySelector('.grid-menu'),
  content: dropContent,
  classes: 'drop-theme-arrows-bounce drop-hero',
  position: 'bottom center',
  constrainToWindow: true,
  constrainToScrollParent: false,
  openOn: 'click',
});
