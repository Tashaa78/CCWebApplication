//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCWebApplicationDAL.WaterAuditEntities
{
    using System;
    using System.Collections.Generic;
    
    public partial class wLiteralLine
    {
        public int id { get; set; }
        public Nullable<long> Enabled { get; set; }
        public Nullable<long> ActiveFlag { get; set; }
        public string ManagedBy { get; set; }
        public string OwnedBy { get; set; }
        public string LineType { get; set; }
        public string Material { get; set; }
        public Nullable<long> FacilityId { get; set; }
        public Nullable<System.DateTime> InstalDate { get; set; }
        public Nullable<long> Diameter { get; set; }
        public Nullable<System.DateTime> LastUpdate { get; set; }
        public string AccHolder { get; set; }
        public string ServiceTyp { get; set; }
        public string MeterNumb { get; set; }
        public Nullable<long> Max_Id { get; set; }
        public System.Data.Entity.Spatial.DbGeometry geom { get; set; }
    }
}