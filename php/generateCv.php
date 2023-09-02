<?php

use Dompdf\Dompdf;

require './vendor/autoload.php';

$dompdf = new Dompdf();
$dompdf->loadHtml(file_get_contents('./resume.html'));
$dompdf->setPaper('A4', 'landscape');
$dompdf->render();

$pathPdf = './cv.pdf';
file_put_contents($pathPdf, $dompdf->output());
