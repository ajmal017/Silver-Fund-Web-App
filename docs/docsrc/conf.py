
# -- Path setup --------------------------------------------------------------
import os
import sys
sys.path.insert(0, os.path.abspath('..'))


# -- Project information -----------------------------------------------------

project = 'Silver Fund IB Client'
copyright = '2020, Sam, Brigham, Haoran'
author = 'Sam, Brigham, Haoran'

# The full version, including alpha/beta/rc tags
release = '0.0.1'


# -- General configuration ---------------------------------------------------

extensions = ['sphinx.ext.autodoc', 'numpydoc']
napoleon_google_docstring = False
napoleon_use_param = False
napoleon_use_ivar = True



# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']


# -- Options for HTML output -------------------------------------------------

html_theme = 'sphinx_rtd_theme'

html_static_path = ['_static']
autoclass_content = 'both'

# -- Extension configuration -------------------------------------------------
