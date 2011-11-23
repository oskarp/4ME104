<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
	
		<!-- META DATA -->
		
		<meta http-equiv="Content-Type"	content="text/html; charset=utf-8" />
		
		<meta name="author" 			content="Henrik Andersen" />
		<meta name="copyright"			content="Henrik Andersen" />
		<meta name="keywords"			content="JobFindr, Jobs, Google Maps, LinkedIn, Authentic Jobs" />
		<meta name="description"		content="A mashup service to find available job offers around the world." />
		
		<!-- CSS -->
		
		<link href="src/css/screen.css" rel="stylesheet" type="text/css" media="screen" title="Screen" />
			
		<!-- JAVASCRIPT -->
		
		<script type="text/javascript" src="http://platform.linkedin.com/in.js">
		   api_key: xohl6jk9w9zr
		   authorize: true
		</script>
		
		<script type="text/javascript" language="javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true&libraries=geometry"></script>
		<script type="text/javascript" language="javascript" src="http://code.jquery.com/jquery-1.7.min.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/Utils.class.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/Loading.class.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/Sidebar.class.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/LinkedIn.class.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/Comm.class.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/Map.class.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/Work.class.js"></script>
		<script type="text/javascript" language="javascript" src="src/js/Main.class.js"></script>
		
		<!-- TITLE -->
		
		<title>JobFindr - Work with professionals.</title>
		
	</head>
	
	<body>
	
		<div id="screen-loading-wrapper">
		
			<div id="screen-loading-box-wrapper"></div>
		
		</div>
		
		<div id="page-topbar-wrapper">
		
			<div id="page-topbar-linkedin-wrapper">
			
				<script type="IN/Login" data-onAuth="loadData"></script>
			
			</div>
		
		</div>
		
		<div id="page-sidebar-wrapper">
		
			<div id="page-sidebar-work-wrapper">
			
				<div id="page-sidebar-work-meta-wrapper">
				
					<div id="page-sidebar-work-meta-logo-wrapper">
					
						<a href="#">
						
							<img src="#" />
						
						</a>
						
					
					</div>
					
					<div id="page-sidebar-work-meta-name-wrapper">
					
						<h1><!-- COMPANY NAME --></h1>
						<p><!-- COMPANY TAGLINE --></p>
					
					</div>
					
					<div class="clear"></div>
				
				</div>
				
				<div id="page-sidebar-work-description-wrapper">
				
					<h2><!-- JOB TITLE --></h2>
					<p><!-- JOB LOCATION --></p>
					
					<div id="page-sidebar-work-description-text-wrapper">
					
						<!-- DUMP -->
					
					</div>
					
					<div id="page-sidebar-apply-wrapper">
					
						<a href="#">Apply for this job</a>
					
					</div>
									
				</div>
			
			</div>
			
			<div id="page-sidebar-social-wrapper">
			
				<div id="page-sidebar-social-list-wrapper">
				
					<div id="page-sidebar-social-list-icon-wrapper"></div>
					
					<ul>
					
						<!-- LinkedIn search -->
					
					</ul>
				
				</div>
			
			</div>
		
		</div>
		
		<div class="clear"></div>
		
		<div id="page-map-wrapper"></div>
		
	</body>

</html>