//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCWebApplicationDAL.SystemEntities
{
    using System;
    using System.Collections.Generic;
    
    public partial class wMainLine
    {
        public int id { get; set; }
        public Nullable<long> FID_ { get; set; }
        public string Entity { get; set; }
        public string Layer { get; set; }
        public Nullable<int> Color { get; set; }
        public string Linetype { get; set; }
        public Nullable<double> Elevation { get; set; }
        public Nullable<int> LineWt { get; set; }
        public string RefName { get; set; }
        public string pipeid { get; set; }
        public Nullable<long> dimension { get; set; }
        public string valveid { get; set; }
        public string endvalveid { get; set; }
        public System.Data.Entity.Spatial.DbGeometry geom { get; set; }
    }
}
