<?php

use Dompdf\Dompdf;

require './vendor/autoload.php';

$dompdf = new Dompdf();
$dompdf->loadHtml('./resume.html');
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

$pathPdf = './cv.pdf';
file_put_contents($pathPdf, $dompdf->output());
