import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Dylan Mazzei</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="section-padding flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto px-6"
        >
          <p className="small-caps text-primary mb-4">Error 404</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">Page Not Found</h1>
          <p className="mb-10">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
            If you believe this is an error, please return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" /> Contact Support
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default NotFoundPage;
